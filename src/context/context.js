import React from 'react';

const MyContext = React.createContext({
    email: '',
    id: '',
    isLoggin: false,
    loginIn: ()=>{},
    color: '',
    setDetailsBackground: ()=>{}
   
});

export default MyContext;