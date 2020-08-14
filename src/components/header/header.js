import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import MyContext from '../../context/context';


class Header extends React.Component{
    constructor(props){
        super(props)
    }
    static contextType = MyContext;

    render(){
        const {isLoggin} = this.context;
        return (
            <header className={styles['site-header']}>
                {isLoggin ? <Link to="/" className={styles.link}>Pets Store</Link> : null}
                {!isLoggin ? <Link to="/login" className={styles.link}>Login</Link> : null}
                {!isLoggin ? <Link to="/register" className={styles.link}>Register</Link> : null}
                {isLoggin ? <Link to="/private" className={styles.link}>Private area</Link> : null}

        
            </header>
        )
    }
} 


export default Header;