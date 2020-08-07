import React from 'react';

const InputError = (props)=>{
    return (
        <div className={props.class}>
            <p>{props.msg}</p>
        </div>
    )
}

export default InputError;