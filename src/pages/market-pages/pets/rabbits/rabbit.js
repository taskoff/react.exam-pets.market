import React from 'react';
import Header from '../../../../components/header/header';
import styles from './rabbit.module.css'
import TitleWithImg from '../../../../components/page-title/page-title';
import SecondMenu from '../../../../components/menus/second-menu/second-menu';

class Rabbit extends React.Component {

    render(){
        return (
            <div className={styles.container}>
                

                <Header />
                <SecondMenu />
               
                <div >
                <TitleWithImg path1='/images/bunny.png' path2='/images/fish4.png' type="portrait-img" title="Rabbits Page"/>


                </div>
            </div>
        )
    }
}

export default Rabbit;