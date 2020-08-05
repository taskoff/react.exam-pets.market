import React from 'react';

const MyContext = React.createContext({
    isLoggin: false,
    loginIn: ()=>{},
    color: '',
    setDetailsBackground: ()=>{}
   
});

export default MyContext;