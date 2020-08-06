import React, { useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import styles from './register.module.css'
import Input from '../../../components/Input/input';
import { Link } from 'react-router-dom';
import MyContext from '../../../context/context';


const RegisterPage = () => { 
    const context = useContext(MyContext); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const history = useHistory();

    const submitHandler = async (e)=>{
        e.preventDefault()
        const data = {username, password}
        if(password === repassword){
            try {
    
                const promise = await fetch('http://localhost:4000/register', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(data) ,
               })
               const res = await promise.json()
               console.log(res)
               const authToken = promise.headers.get('Authorization');
               document.cookie = `x-auth-token=${authToken}`;
               context.loginIn(res.username, res._id);
               history.push('/')
    
            } catch (e){
                console.log(e)
            }

        }else {
            alert('RePassword Not Match!')
        }
    }
    return (
        
        <div>
            <Header />
            <Title title="Register Page" />
            <div className={styles['form-box']}>
                <form onSubmit={submitHandler}>
                    <Input 
                        value={username} 
                        label="Username" 
                        type="text" 
                        name="username" 
                        onChange={e=>setUsername(e.target.value)} 
                    />
                    <Input 
                        value={password} 
                        label="Password" 
                        type="password" 
                        name="password" 
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <Input
                        value={repassword} 
                        label="RePassword" 
                        type="password" 
                        name="repassword"
                        onChange={e=>setRepassword(e.target.value)}
                    />

                    <button className={styles['submit-button']}>Sign Up</button>
                    <div className={styles.alredy}>
                        <p > Alredy have account? Then just
                          <span className={styles['form-link']}><Link to="/login">Sign-In</Link>!</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default RegisterPage;