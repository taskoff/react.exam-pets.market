import React from "react";
import styles from './input.module.css'

const Input = ({label, type, name, onChange})=>{
    return (
        <div className={styles['input-box']}>
            <label htmlFor={name} className={styles['form-label']}>{label}</label>
            <input type={type} name={name} id={name} className={styles['form-input']} onChange={onChange}></input>
        </div>
    )
}

export default Input