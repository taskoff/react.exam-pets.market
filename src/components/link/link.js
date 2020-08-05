import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './link.module.css'

const MenuLink = ({path, link, color})=>{
    return (
        <NavLink to={path} activeClassName={styles['is-active']} className={`${styles.link} ${styles[`${color}`]}`}>{link}</NavLink>

    )
}

export default MenuLink