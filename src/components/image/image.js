import React from 'react';
import styles from './image.module.css';
import { Link } from 'react-router-dom';
import BackgroundContext from '../../context/details-background';

class Pic extends React.Component{
    constructor(props){
        super(props)
    }
    static contextType = BackgroundContext;

    changeBackground = (pet)=>{
        this.context.detailsBackground=pet;
    }
    render(){

       const{ path, type, pet } = this.props
            return (
                <Link className={styles.link} to="/details" onClick={this.changeBackground(pet)} >
                <div className={styles[`img-box-${type}`]}>
                    
                        <img className={styles[`gallery-img-${type}`]} src={path}></img>
                </div>
                    </Link>
            )
        
    }

} 
    

export default Pic;