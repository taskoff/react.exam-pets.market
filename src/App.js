import React from 'react';
import './App.css';
import Navigation from './navigation/navi';
import Footer from './components/footer/footer';
import MyContext from '../src/context/context';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggin: false,
      loginIn: this.loginIn,
      color: '',
      setDetailsBackground: this.setDetailsBackground
    
    }
  }

  loginIn = () => {
    this.setState({isLoggin:true})
  }

  setDetailsBackground= (c)=>{
    this.setState({color:c})
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
