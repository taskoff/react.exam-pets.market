import React, {useContext, useState} from 'react';
import  {useHistory} from 'react-router-dom';

import Input from '../../../components/Input/input';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import AreaMenu from '../../../components/menus/area-menu/area-menu';
import styles from './addPet.module.css';
// import getCookie from '../../../untils/coockie';
import MyContext from '../../../context/context';
import createPet from '../../../untils/create-pet';


const AddPet = ()=> {
    // const context = useContext(MyContext); 
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    const context = useContext(MyContext);


        const submitHandler = async (e)=>{
            e.preventDefault()
            const creator = context.email
            if(price && description && imageUrl && type){
                // const creator = {id: context.id, username: context.username}
                const data = {price, description, imageUrl, type, creator};
                
                const promise = await createPet(data);
                history.push('/')

            }
        }
        return (
            <div>
                <Header/>
                <AreaMenu />
                <Title title="Add Pet" />
                <div className={styles['form-box']}>
                    <form onSubmit={submitHandler} className={styles['add-form']}>
                        <div className={styles['form-select-box']}>
                            <div className={styles['select-label']}>
                                <label htmlFor="pet-type" >Select Type</label>
                            </div>
                            <select id='pet-type'  onChange={e=>setType(e.target.value)} className={styles['form-select']} >
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
                        <div className={styles['submit-btn-box']}>
                            <button className={styles['submit-btn']}>Add Pet</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    
}

export default AddPet