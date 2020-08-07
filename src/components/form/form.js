import React, { useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Title from '../title/title';
import Header from '../header/header';
import styles from './form.module.css'
import Input from '../Input/input';
import InputError from '../input-error/input-error';
import { Link } from 'react-router-dom';
import MyContext from '../../context/context';
import authication from '../../untils/auth';


const Form = (props) => { 
    const context = useContext(MyContext); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [userInputErr, setUserInputErr] = useState(false)
    const [passwordInputErr, setPasswordInputErr] = useState(false)
    const [rePassInputErr, setRePassInputErr] = useState(false)
    const history = useHistory();

    const submitHandler = async (e)=>{
        e.preventDefault()
        const data = {username, password}
            authication(data, context, history, props.path);
    }

    const checkInputForErr = (e)=>{
        console.log(e.target)
        const value = e.target.value;
        const name = e.target.name;


        const objWithEmpty = {
            username: ()=>setUserInputErr(true),
            password: ()=>setPasswordInputErr(true)
        }

        const objWithNotEmpty = {
            username: ()=>setUserInputErr(false),
            password: ()=>setPasswordInputErr(false)
        }
        if(value === ''){
            objWithEmpty[name]()
        } else {
            objWithNotEmpty[name]()
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
                            value={username} 
                            label="Username" 
                            type="text" 
                            name="username" 
                            onChange={e=>setUsername(e.target.value)} 
                            onBlur={checkInputForErr}
                        />
                        {userInputErr? <div className={styles.error}>
                            <InputError msg='Username is required' class='standart' />
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

                    </div>
                    {props.repass ? <div className={`${styles['input-box']} ${styles[props.repass]}`}>
                        <Input
                            value={repassword} 
                            label="RePassword" 
                            type="password" 
                            name="repassword"
                            onChange={e=>setRepassword(e.target.value)}
                            onBlur={rePassCheck}
                        />
                        {rePassInputErr? <div className={styles.error}>
                            <InputError msg="RePassword don't mach" class='standart' />
                        </div> : null}

                    </div> : null}

                    {props.repass?<button className={styles['submit-button']}>Sign Up</button>: null}
                    {props.repass?<div className={`${styles.alredy} ${styles[props.repass]}}`}>
                        <p > Alredy have account? Then just
                          <span className={styles['form-link']}><Link to="/login">Sign-In</Link>!</span>
                        </p>
                    </div>:null}

                   { !props.repass?<button className={styles['submit-button']}>Sign Up</button>:null}
                    {!props.repass?<div className={styles.alredy}>
                        <p > Don't have account? Then just
                          <span className={styles['form-link']}><Link to="/register">Sign-Up</Link>!</span>
                        </p>
                    </div>:null}
                </form>
         </div>
        
    )
}

export default Form;