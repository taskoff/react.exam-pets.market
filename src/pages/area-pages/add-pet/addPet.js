import React, {useContext, useState} from 'react';
import  {useHistory} from 'react-router-dom';

import Input from '../../../components/Input/input';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import AreaMenu from '../../../components/menus/area-menu/area-menu';
import styles from './addPet.module.css';
import getCookie from '../../../untils/coockie';
import MyContext from '../../../context/context';


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
            const creator = context.username
            if(price && description && imageUrl && type){
                console.log(context.id, context.username)
                const data = {price, description, imageUrl, type, creator};
                
                console.log(data)
                try {
    
                    const promise = await fetch('http://localhost:4000/create', {
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                         'Authorization': getCookie('x-auth-token')
                     },
                     body: JSON.stringify(data) ,
                   })
                   
                   history.push('/')
        
                } catch (e){
                    console.log(e)
                }
    

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
                            <label for="pet-type" >Select Type</label>
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
                            <label for="pet-description">Description</label>
                            <textarea 
                                id="pet-description" 
                                value={description} 
                                onChange={e=>setDescription(e.target.value)}
                                ></textarea>
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