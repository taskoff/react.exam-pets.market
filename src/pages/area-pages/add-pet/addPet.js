import React from 'react';
import Input from '../../../components/Input/input';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import AreaMenu from '../../../components/menus/area-menu/area-menu';
import styles from './addPet.module.css';

const AddPet = ()=> {
       
        return (
            <div>
                <Header/>
                <AreaMenu />
                <Title title="Add Pet" />
                <div className={styles['form-box']}>
                    <form>
                        <div className={styles['form-select-box']}>
                            <label for="pet-type" >Select Type</label>
                            <select id='pet-type' className={styles['form-select']} >
                                <option className={styles['form-option']}></option>
                                <option className={styles['form-option']}>Dog</option>
                                <option>Cat</option>
                                <option>Fish</option>
                                <option>Rabbit</option>
                                <option>Other</option>

                            </select>
                        </div>
                        <Input label="ImageUrl" type="text" name="imageurl" />
                        <Input label="Price" type="text" name="price" />
                        <div className={styles['form-textarea-box']}>
                            <label for="pet-description">Description</label>
                            <textarea id="pet-description"></textarea>
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