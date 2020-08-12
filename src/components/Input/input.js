import React from "react";
import styles from './input.module.css'

const Input = ({label, type, name, onChange, onBlur, value})=>{
    return (
        <div className={styles['input-box']}>
            <div className={styles['input-label']}>
                <label htmlFor={name} className={styles['form-label']}>{label}</label>
            </div>
            <input type={type} value={value} name={name} id={name} className={styles['form-input']} onChange={onChange} onBlur={onBlur}></input>
        </div>
    )
}

export default Input