import React from "react";
import styles from './image-btn.module.css';
import { Link } from "react-router-dom";

const ImageBtn = (props)=>{

    return (
     
            <button  onClick={props.onClick} className={styles['img-btn']}>{props.value}</button>
   
    )
}

export default ImageBtn;