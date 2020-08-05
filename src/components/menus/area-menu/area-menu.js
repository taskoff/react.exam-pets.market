import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './area-menu.module.css';
import MenuLink from '../../link/link';

const AreaMenu = ({ type })=>{
    return (
        <header className={`${styles['second-menu']} ${styles[type]}`}>
            <MenuLink path='/private/add' color='red' link='Add New Pet' />
            <MenuLink path='/private/pets' color='green' link='My Pets' />
            <MenuLink path='/logout' color='dark-green' link='Logout' />
        </header>
    )
}

export default AreaMenu;