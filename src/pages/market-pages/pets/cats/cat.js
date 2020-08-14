import React from 'react';
import Header from '../../../../components/header/header';
import styles from './cat.module.css';
import TitleWithImg from '../../../../components/page-title/page-title';
import ImgGallery from '../../../../components/gallery/gallery';
import SecondMenu from '../../../../components/menus/second-menu/second-menu';


const Cat = ()=>{
    return (
        <div className={styles.container}>
            <Header />
            <SecondMenu />
               
            <div >
            <TitleWithImg path1="/images/cat.png" path2="/images/cat2.png" type="img" title="Cats Page" />
            </div>
            <ImgGallery pet={'cat'} type="gallery" pet='cat'/>

        </div>
    )
}

export default Cat;