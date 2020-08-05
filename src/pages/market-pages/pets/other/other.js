import React from 'react';
import Header from '../../../../components/header/header';
import styles from './other.module.css'
import TitleWithImg from '../../../../components/page-title/page-title';
import SecondMenu from '../../../../components/menus/second-menu/second-menu';

class Other extends React.Component {

    render(){
        return (
            <div className={styles.container}>
                

                <Header />
                <SecondMenu />
               
                <div >
                <TitleWithImg path1='/images/other.png' path2='/images/fish4.png' type="portrait-img" title="Other Pets Page"/>


                </div>
            </div>
        )
    }
}

export default Other;