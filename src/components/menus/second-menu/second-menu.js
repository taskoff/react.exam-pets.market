import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './second-menu.module.css';
import MenuLink from '../../link/link';

const SecondMenu = ({ type })=>{
    return (
        <header className={`${styles['second-menu']} ${styles[type]}`}>
            <MenuLink path='/dog' color='red' link='Dogs' />
            <MenuLink path='/cat' color='green' link='Cats' />
            <MenuLink path='/fish' color='blue' link='Fishes' />
            <MenuLink path='/rabbit' color='yellow' link='Rabbits' />
            <MenuLink path='/other' color='dark-green' link='Other' />

        </header>
    )
}

export default SecondMenu;