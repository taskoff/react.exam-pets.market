import React, { useState, useEffect, useContext} from 'react';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Form from '../../../components/forms/reg-form/form';


const RegisterPage = () => { 
   
    

    

   

    
    return (
        
        <div>
            <Header />
            <Title title="Register Page"  />
            <Form repass={true} path='register'/>
            
        </div>
        
    )
}

export default RegisterPage;