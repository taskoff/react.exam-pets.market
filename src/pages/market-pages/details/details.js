import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Pic from '../../../components/image/image';
import styles from './details.module.css';
import SecondMenu from '../../../components/menus/second-menu/second-menu';
import MyContext from '../../../context/context';
import getPetInfo from '../../../untils/get-pet-details';


const Details = ()=> {

    const [pet, setPet] = useState({})
    
    const context = useContext(MyContext)
    const {id}  = useParams();

    const getInfo = async ()=>{
        const res =  await getPetInfo(id);
        setPet(res);
    }
       
    useEffect( ()=>{
       getInfo()
    },[])
        
        return (
           

            <div className={styles[`${context.color}`]}>
                    <Header />
                    <SecondMenu />

                    <Title title="Details"  />
                <div className={styles['notice-container']}>
                    <Pic path={pet.imageUrl} type='details' class='no-click'/>
                    <div className={styles['details-box']}>
                        <p className={styles.text}>{pet.description}</p>
                        <p className={styles.text}>{pet.price}$</p>
                        <p className={styles.text}>Autor: {pet.creator}</p>
                    </div>
                </div>
            </div>
           
        )
    
}
export default Details;