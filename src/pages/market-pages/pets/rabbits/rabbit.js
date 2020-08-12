import React from 'react';
import Header from '../../../../components/header/header';
import styles from './rabbit.module.css'
import TitleWithImg from '../../../../components/page-title/page-title';
import SecondMenu from '../../../../components/menus/second-menu/second-menu';
import ImgGallery from '../../../../components/gallery/gallery';

class Rabbit extends React.Component {

    render(){
        return (
            <div className={styles.container}>
                

                <Header />
                <SecondMenu />
               
                <div >
                <TitleWithImg path1='/images/bunny.png' path2='/images/fish4.png' type="portrait-img" title="Rabbits Page"/>
                <ImgGallery pet={'rabbit'} type="gallery"/>


                </div>
            </div>
        )
    }
}

export default Rabbit;