import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Pic from '../../../components/image/image';
import styles from './details.module.css';
import DetailsBackground from '../../../context/details-background';
import SecondMenu from '../../../components/menus/second-menu/second-menu';
import BacgroundContext from '../../../context/details-background';
import MyContext from '../../../context/context';


const Details = ()=> {

    const [pet, setPet] = useState({})
    
    const context = useContext(MyContext)
    const {id}  = useParams();

    const getPetInfo = async ()=>{
        console.log(1)
        const promise = await fetch(`http://localhost:4000/details/${id}`);
        const res = await promise.json() 
        setPet(res)

    }
       
    useEffect(()=>{
        getPetInfo()
    },[])
        
        return (
           

            <div className={styles[`${context.color}`]}>
                    <Header />
                    <SecondMenu />

                    <Title title="Details"  />
                <div className={styles['notice-container']}>
                    <Pic path={pet.imageUrl} type='details' />
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