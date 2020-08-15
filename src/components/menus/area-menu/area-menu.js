import React, {useContext} from 'react';
import styles from './area-menu.module.css';
import MenuLink from '../../link/link';
import MyContext from '../../../context/context';


const AreaMenu = ({ type })=>{
    const context = useContext(MyContext);
    const logOut = ()=>{
        context.logOut()
    }
    return (
        <header className={`${styles['second-menu']} ${styles[type]}`}>
            <MenuLink path='/private/add' color='red' link='Add New Pet' />
            <MenuLink path='/private/my-pets' color='green' link='My Pets' />
            <MenuLink path='/logout' onclick={logOut} color='dark-green' link='Logout' />
        </header>
    )
}

export default AreaMenu;