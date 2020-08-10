import React, {useState, useContext, useEffect} from 'react';
import MyContext from '../../../context/context';
import Header from '../../../components/header/header';
import AreaMenu from '../../../components/menus/area-menu/area-menu';
import Title from '../../../components/title/title';


const MyPets = ()=>{

    const context = useContext(MyContext);
    const myPetsRender = ()=>{
    }
    
    useEffect(()=>{
    
        console.log(context)
    
    })

    return (
        <div>
            <Header/>
            <AreaMenu />
            <Title title="My Pets" />
            <div>
                <h3>Profile Info</h3>
                <p>Username:{context.username}</p>
                <p>Email:</p>
            </div>
            <div>
                <h3>My Pets:</h3>
                <div>
                    {myPetsRender()}
                </div>
            </div>
        </div>
    )
}

export default MyPets;