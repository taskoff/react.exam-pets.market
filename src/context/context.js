import React from 'react';

const MyContext = React.createContext({
    isLoggin: false,
    loginIn: ()=>{}
});

export default MyContext;