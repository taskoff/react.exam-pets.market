import React from 'react';

const UserContext = React.createContext({
    id: null,
    username: null,
    email:null
   
});

export default UserContext;