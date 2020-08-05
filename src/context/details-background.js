import React from 'react';

const BacgroundContext = React.createContext({
    detailsBackground: '',
    setDetailsBackground:function (b){this.detailsBackground = b} 
});

export default BacgroundContext;