import React from 'react';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Pic from '../../../components/image/image';
import styles from './details.module.css';
import DetailsBackground from '../../../context/details-background';
import SecondMenu from '../../../components/menus/second-menu/second-menu';


class Details extends React.Component {
    constructor(props){
        super(props)
    }
    static contextType = DetailsBackground;

    render() {
        
        const pet = this.context.detailsBackground;
        console.log(this.context)
        return (
            <div className={styles[`${pet}`]}>
                    <Header />
                    <SecondMenu />

                    <Title title="Details" />
                <div className={styles['notice-container']}>
                    <Pic path='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' type='details' />
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

export default Details;