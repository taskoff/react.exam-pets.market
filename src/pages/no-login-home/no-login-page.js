import React from "react";
import Title from "../../components/title/title";
import styles from './no-login-page.module.css';
import { Link } from "react-router-dom";

const NoLoginPage = ()=>{
    return (
        <div className={styles.container}>
            
            <Title title="Wellcome to Pets Market"/>
            <div className={styles['home-text']}>
                <p>To see our market</p>
                <p>Just <Link to="/login" className={styles.action} >Login</Link>  or <Link to="/register" className={styles.action} >Register</Link></p>
            </div>
            <div className={styles['home-img-container']}>
                <img src="images/home.png" alt="" />
            </div>
        </div>
    )
}

export default NoLoginPage;