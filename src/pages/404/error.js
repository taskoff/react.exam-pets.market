import React from 'react';
import styles from './error.module.css';
import Header from '../../components/header/header';

const ErrorPage = ()=>{
    return (
        <div>
            <Header />
            <div className={styles['error-page-container']}>
                <img src="images/404.png" alt=''/>
            </div>
        </div>
    )
}

export default ErrorPage;