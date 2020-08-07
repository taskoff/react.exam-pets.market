import React, {useState, useContext} from 'react';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Form from '../../../components/form/form';

const LoginPage = () => {
    
    return (
        <div>
            <Header />
            <Title title="Login Page" />
            <Form path='login' />
           
        </div>
    )
}

export default LoginPage;