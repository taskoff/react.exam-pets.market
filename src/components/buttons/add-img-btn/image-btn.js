import React from "react";
import styles from './image-btn.module.css';

const ImageBtn = (props)=>{

    return (
     
            <button  onClick={props.onClick} className={styles[props.class]}>{props.value}</button>
   
    )
}

export default ImageBtn;