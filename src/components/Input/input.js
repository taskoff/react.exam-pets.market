import React from "react";
import styles from './input.module.css'

const Input = ({label, type, name, onChange, onBlur})=>{
    return (
        <div className={styles['input-box']}>
            <label htmlFor={name} className={styles['form-label']}>{label}</label>
            <input type={type} name={name} id={name} className={styles['form-input']} onChange={onChange} onBlur={onBlur}></input>
        </div>
    )
}

export default Input