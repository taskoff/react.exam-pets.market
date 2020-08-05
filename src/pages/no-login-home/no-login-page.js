import React from "react";
import Header from "../../components/header/header";
import Title from "../../components/title/title";
import styles from './no-login-page.module.css';
import SecondMenu from "../../components/menus/second-menu/second-menu";
import { Link } from "react-router-dom";

const NoLoginPage = ()=>{
    return (
        <div className={styles.container}>
            {/* <Header /> */}
            {/* <SecondMenu type="home-menu"/> */}
            <Title title="Wellcome to Pets Market"/>
            <div className={styles['home-text']}>
                <p>To see our market</p>
                <p>Just <Link to="/login" className={styles.action} >Login</Link>  or <Link to="/register" className={styles.action} >Register</Link></p>
            </div>
        </div>
    )
}

export default NoLoginPage;