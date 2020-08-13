import React, { useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './form.module.css'
import Input from '../Input/input';
import InputError from '../input-error/input-error';
import { Link } from 'react-router-dom';
import MyContext from '../../context/context';
import authication from '../../untils/auth';


const Form = (props) => { 
    const context = useContext(MyContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [userInputErr, setUserInputErr] = useState(false);
    const [userLengthErr, setUserLengthErr] = useState(false);
    const [passwordInputErr, setPasswordInputErr] = useState(false);
    const [passLengthErr, setPassLengthErr] = useState(false);
    const [rePassInputErr, setRePassInputErr] = useState(false);
    const history = useHistory();

    const submitHandler = async (e)=>{
        e.preventDefault()
        if(!userInputErr && !userLengthErr && !passwordInputErr && !passLengthErr && !rePassInputErr && email && password){
            const data = {email: email, password}
                authication(data, context, history, props.path);
        } else {
            alert('Email and Password are required!')
        }
    }

    const checkInputForErr = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
       
        const obj = {
            password: ()=>{checkPassLength()},
            email: ()=>{emailCheck()}
        }

        obj[name]()
       

    }


    const emailCheck = ()=>{
        if(email===''){
            setUserInputErr(true)
        } else {
            setUserInputErr(false)
            const v = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if(!v){
                setUserLengthErr(true);
            } else {
                setUserLengthErr(false);
            }
        }
    }

    const checkPassLength = ()=>{
        if(password === ''){
            setPasswordInputErr(true)
        } else {
             setPasswordInputErr(false)
        }
        if(password.length > 0 && password.length < 3) {
            setPassLengthErr(true);
        } else {
            setPassLengthErr(false);
        }
    }

    const rePassCheck = ()=>{
            if(password !== repassword ) {
                setRePassInputErr(true);
            } else {
                setRePassInputErr(false);
            }
        }
    return (
        
        <div className={styles['form-box']}>
            
                <form onSubmit={submitHandler} className={styles.form} >
                    <div className={styles['input-box']}>
                        <Input 
                            value={email} 
                            label="Email" 
                            type="text" 
                            name="email" 
                            onChange={e=>setEmail(e.target.value)} 
                            onBlur={checkInputForErr}
                        />
                        {userInputErr? <div className={styles.error}>
                            <InputError msg='Email is required' class='standart' />
                        </div> : null}
                        {userLengthErr? <div className={styles.error}>
                            <InputError msg='Email is Invalid!' class='standart' />
                        </div> : null}
                    </div>

                    <div className={styles['input-box']}>
                        <Input 
                            value={password} 
                            label="Password" 
                            type="password" 
                            name="password" 
                            onChange={e=>setPassword(e.target.value)}
                            onBlur={checkInputForErr}

                        />
                        {passwordInputErr? <div className={styles.error}>
                            <InputError msg='Password is required' class='standart' />
                        </div> : null}
                        {passLengthErr? <div className={styles.error}>
                            <InputError msg='Password must have min 3 simbols' class='standart' />
                        </div> : null}

                    </div>
                    {props.repass ? <div>

                       <div className={`${styles['input-box']} ${styles[props.repass]}`}>
                            <Input
                                value={repassword} 
                                label="RePassword" 
                                type="password" 
                                name="repassword"
                                onChange={e=>setRepassword(e.target.value)}
                                onBlur={rePassCheck}
                            />
                            {rePassInputErr? <div className={styles.error}>
                                <InputError msg="RePassword don't match" class='standart' />
                            </div> : null}

                        </div>

                        <button className={styles['submit-button']}>Sign Up</button>
                       <div className={`${styles.alredy} ${styles[props.repass]}}`}>
                            <p > Alredy have account? Then just
                            <span className={styles['form-link']}><Link to="/login">Sign-In</Link>!</span>
                            </p>
                        </div>
                    </div> : null}
                    {!props.repass? <div>
                       <button className={styles['submit-button']}>Sign Up</button>
                       <div className={styles.alredy}>
                            <p > Don't have account? Then just
                            <span className={styles['form-link']}><Link to="/register">Sign-Up</Link>!</span>
                            </p>
                        </div>
                    </div> : null }  
                </form>
         </div>
        
    )
}

export default Form;