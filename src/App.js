import React from 'react';
import './App.css';
import Navigation from './navigation/navi';
import Footer from './components/footer/footer';
import MyContext from '../src/context/context';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      id: '',
      isLoggin: false,
      loginIn: this.loginIn,
      logOut: this.logOut,
      color: '',
      setDetailsBackground: this.setDetailsBackground
    
    }
  }

  loginIn = (u, i) => {
    this.setState({isLoggin:true, email:u, id:i});
  }
  logOut = ()=>{
    this.setState({isLoggin:false, username:'', id:''});
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  }

  setDetailsBackground= (c)=>{
    this.setState({color:c});
  }
  
  render () {
    
      return (
     
        <div className="App">
           <MyContext.Provider value={{...this.state}}>
              <Navigation />
            </MyContext.Provider>
        </div>
       
      
      
    );
  }
}

export default App;
