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
      loginIn: this.loginIn
    }
  }
  // static contextType = MyContext;

  loginIn = (isLoggin) => {
    this.setState({isLoggin:true})
  }
  render () {
    
    // const {isLoggin, loginIn} = this.context;
    // console.log(isLoggin)
    return (
      <MyContext.Provider value={this.state}>

        <div className="App">
            <Navigation isLoggin={this.state.isLoggin}/>
        </div>
       
      </MyContext.Provider>
      
    );
  }
}

export default App;
