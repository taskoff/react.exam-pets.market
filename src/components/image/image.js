import React from 'react';
import {useContext} from 'react';
import styles from './image.module.css';
import { Link } from 'react-router-dom';
import MyContext from '../../context/context';

const Pic = (props)=>{
    
    return (
        <MyContext.Consumer>

            {({setDetailsBackground})=> <Link className={styles.link} to={`/details/${props.id}`} onClick={()=>setDetailsBackground(props.pet)}>
                <div className={styles[`img-box-${props.type}`]}>

                        <img className={styles[`gallery-img-${props.type}`]} src={props.path}></img>
                </div>
            </Link>}
        </MyContext.Consumer>
    )
    
}


    

export default Pic;