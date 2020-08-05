import React from 'react';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Pic from '../../../components/image/image';
import styles from './details.module.css';
import DetailsBackground from '../../../context/details-background';
import SecondMenu from '../../../components/menus/second-menu/second-menu';
import BacgroundContext from '../../../context/details-background';
import MyContext from '../../../context/context';


class Details extends React.Component {
    constructor(props){
        super(props)
       
    }

     static contextType = MyContext;

    render() {
        console.log(this.context.color)
        const pet = this.context.color;
        
        return (
           

            <div className={styles[`${this.context.color}`]}>
                    <Header />
                    <SecondMenu />

                    <Title title="Details"  />
                <div className={styles['notice-container']}>
                    <BacgroundContext.Provider value={this.state}>
                        <Pic path='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' type='details' />
                    </BacgroundContext.Provider>
                   
                    <div className={styles['details-box']}>
                        <p className={styles.text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum</p>
                        <p className={styles.text}>Price: 20$</p>
                        <p className={styles.text}>Autor:</p>
                    </div>
                </div>
            </div>
           
        )
    }
}
Details.contextType = MyContext
export default Details;