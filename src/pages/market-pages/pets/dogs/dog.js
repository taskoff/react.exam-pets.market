import React from 'react';
import Header from '../../../../components/header/header';
import styles from './dog.module.css'
import TitleWithImg from '../../../../components/page-title/page-title';
import ImgGallery from '../../../../components/gallery/gallery';
import SecondMenu from '../../../../components/menus/second-menu/second-menu';

class Dog extends React.Component {

    render(){
        return (
            <div className={styles.container}>
                

                <Header />
                <SecondMenu />
                <div >
                    <div >
                        <TitleWithImg path1='/images/dog6.png' path2='/images/dog.png' type="img" title="Dogs Page"/>
                    </div>
                    <ImgGallery pet={'dog'} type="gallery"/>
                </div>
            </div>
        )
    }
}

export default Dog;