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
import EditPet from '../pages/area-pages/edit-pet/edit-pet';
import MyPets from '../pages/area-pages/my-pets/my-pets';
import ErrorPage from '../pages/404/error';

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }
    static contextType = MyContext;
    render (){
        const {isLoggin} = this.context;
        return (
            <div >
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={!isLoggin ? NoLoginPage : HomePage} />
                    <Route path="/login" component={!isLoggin ? LoginPage : HomePage} />
                    <Route path="/register" component={!isLoggin ? RegisterPage : HomePage}/>
                    <Redirect from='/logout' to='/' />
                    <Route path="/dog" component={isLoggin ? Dog : LoginPage}/>
                    <Route path="/cat" component={isLoggin ? Cat : LoginPage}/>
                    <Route path="/fish" component={isLoggin ? Fish : LoginPage}/>
                    <Route path="/rabbit" component={isLoggin ? Rabbit : LoginPage}/>
                    <Route path="/other" component={isLoggin ? Other : LoginPage}/>
                    <Route path="/details/:id" component={isLoggin ? Details : LoginPage}/>
                    <Route path="/private/add" component={isLoggin ? AddPet : LoginPage}/>
                    <Route path="/private/edit/:id" component={isLoggin ? EditPet : LoginPage}/>
                    <Route path="/private/my-pets" component={isLoggin ? MyPets : LoginPage}/>
                    <Route path="/private" component={isLoggin ? PrivateArea : LoginPage}/>
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
    
            </div>
        )
    }
}

export default Navigation;