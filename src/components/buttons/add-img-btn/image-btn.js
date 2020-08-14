import React from "react";
import styles from './image-btn.module.css';
import { Link } from "react-router-dom";

const ImageBtn = (props)=>{
    // const uploadImage = ()=>{
    //     const widget = window.cloudinary.createUploadWidget({
    //         cloudName: 'dxt2tu7ic',
    //         uploadPreset: 'test123'

    //     }, (error, result)=>{
    //         if(result.event === 'success'){
    //             console.log(result.info.url)
    //         }
    //     });
    //     widget.open()
    // }

    return (
     
            <Link onClick={props.onClick} className={styles['img-btn']}>{props.value}</Link>
   
    )
}

export default ImageBtn;