import React from 'react';
import Header from '../../../../components/header/header';
import styles from './fish.module.css'
import TitleWithImg from '../../../../components/page-title/page-title';
import SecondMenu from '../../../../components/menus/second-menu/second-menu';
import ImgGallery from '../../../../components/gallery/gallery';

class Fish extends React.Component {

    render(){
        return (
            <div className={styles.container}>
                

                <Header />
                <SecondMenu />
               
                <div >
                    <TitleWithImg path1='/images/fish.png' path2='/images/fish4.png' type="img" title="Fishes Page"/>
                    <ImgGallery pet={'fish'} type="gallery"/>
                </div>
            </div>
        )
    }
}

export default Fish;