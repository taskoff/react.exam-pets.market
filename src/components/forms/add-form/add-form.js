import React, {useContext, useState, useEffect} from 'react';
import  {useHistory, useParams} from 'react-router-dom';
import Input from '../../../components/Input/input';
import styles from './add-form.module.css';
import MyContext from '../../../context/context';
import createPet from '../../../untils/create-pet';
import getPetInfo from '../../../untils/get-pet-details';
import editPet from '../../../untils/edit-pet';

const PetForm = ({isEdit})=> {
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    // const [pet, setPet] = useState({})
    const {id}  = useParams();

    const history = useHistory();
    const context = useContext(MyContext);


        const submitHandler = async (e)=>{
            e.preventDefault()
            const creator = context.email
            if(price && description && imageUrl && type){
                const data = {price, description, imageUrl, type, creator};
                if(!isEdit){
                    const promise = await createPet(data);
                } else {
                    const promise = await editPet(data, id);
                }
                history.push('/')

            }
        }
       
        const getInfo = async ()=>{
            if(id){
                    const res =  await getPetInfo(id);
                    console.log(res)
                    // setPet(res);
                    setType(res.type);
                    setImageUrl(res.imageUrl);
                    setPrice(res.price);
                    setDescription(res.description);
            }            
        }
        useEffect(()=>{
            getInfo();
        }, [])

        return (
           
                
                <div className={styles['form-box']}>
                    <form onSubmit={submitHandler} className={styles['add-form']}>
                        <div className={styles['form-select-box']}>
                            <div className={styles['select-label']}>
                                <label htmlFor="pet-type" >Select Type</label>
                            </div>
                            <select id='pet-type' value={type} onChange={e=>setType(e.target.value)} className={styles['form-select']} >
                                <option className={styles['form-option']}></option>
                                <option className={styles['form-option']}>Dog</option>
                                <option>Cat</option>
                                <option>Fish</option>
                                <option>Rabbit</option>
                                <option>Other</option>

                            </select>
                        </div>
                        <Input 
                            value={imageUrl} 
                            label="ImageUrl" 
                            type="text" 
                            name="imageurl"
                            onChange={e=>setImageUrl(e.target.value)} 
                            />
                        <Input 
                            value={price}
                            label="Price" 
                            type="text" 
                            name="price"
                            onChange={e=>setPrice(e.target.value)}
                             />
                        <div className={styles['form-textarea-box']}>
                            <div className={styles['textarea-label']}>
                                <label for="pet-description">Description</label>
                            </div>
                            <div >
                                <textarea 
                                    className={styles.textarea}
                                    id="pet-description" 
                                    value={description} 
                                    onChange={e=>setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        {!isEdit ? <div className={styles['submit-btn-box']}>
                            <button className={styles['submit-btn']}>Add Pet</button>
                        </div> : null}
                        {isEdit ? <div className={styles['edit-btn-box']}>
                                        <button className={styles['submit-btn']}>Edit Pet</button>
                                </div>  :null}
                    </form>
                </div>

            
        )
    
}

export default PetForm;