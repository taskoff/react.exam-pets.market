import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/market-pages/home-page/home';
import LoginPage from '../pages/user/login/login';
import RegisterPage from '../pages/user/register/register';
import Dog from '../pages/market-pages/pets/dogs/dog';
import Cat from '../pages/market-pages/pets/cats/cat';
import Fish from '../pages/market-pages/pets/fishes/fish';
import Rabbit from '../pages/market-pages/pets/rabbits/rabbit';
import Other from '../pages/market-pages/pets/other/other';
import MyContext from '../context/context';
import Details from '../pages/market-pages/details/details';
import PrivateArea from '../pages/area-pages/area-page/area';
import AddPet from '../pages/area-pages/add-pet/addPet';
import NoLoginPage from '../pages/no-login-home/no-login-page';

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }
    static contextType = MyContext;
    render (){
        const {isLoggin} = this.context;
        console.log(isLoggin)
        return (
            <div >
            <BrowserRouter>
                <Switch>
                <Route path="/" exact component={!isLoggin ? NoLoginPage : HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage}/>
                <Redirect from='/logout' to='/' />
                <Route path="/dog" component={Dog}/>
                <Route path="/cat" component={Cat}/>
                <Route path="/fish" component={Fish}/>
                <Route path="/rabbit" component={Rabbit}/>
                <Route path="/other" component={Other}/>
                <Route path="/private/add" component={AddPet}/>
                <Route path="/private" component={PrivateArea}/>
                <Route path="/details/:id" component={Details}/>

    
                </Switch>
            </BrowserRouter>
    
            </div>
        )
    }
}

export default Navigation;