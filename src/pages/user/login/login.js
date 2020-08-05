import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Input from '../../../components/Input/input';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import MyContext from '../../../context/context';

const LoginPage = () => {
    
    const context = useContext(MyContext); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitHandler = async (e)=>{
        e.preventDefault();
        const data = {username, password}
        console.log(data)
        const promise = await fetch('http://localhost:4000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const authToken = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${authToken}`;
        context.loginIn();
        history.push('/')
    }
    return (
        <div>
            <Header />
            <Title title="Login Page" />
            <div className={styles['form-box']}>
                <form onSubmit={submitHandler}>
                    <Input 
                        label="Username" 
                        type="text" 
                        name="username"
                        value={username}
                       onChange={e=>setUsername(e.target.value)}
                    />
                    <Input 
                        label="Password" 
                        type="password" 
                        name="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)} 
                    />
                    <button className={styles['submit-button']}>Login</button>
                    <div className={styles.alredy}>
                        <p > Don't have account? Then just
                          <span className={styles['form-link']}><Link to="/register">Sign-Up</Link>!</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;