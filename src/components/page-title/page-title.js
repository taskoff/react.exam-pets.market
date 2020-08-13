import React from 'react';
import Title from '../title/title';
import styles from './page-title.module.css'

const TitleWithImg = ({path1, path2, type, title})=>{
    return (
        <div className={styles.container}>
            <img src={path1} className={styles[type]}></img>
            <Title title={title}/>
        </div>
    )
}

export default TitleWithImg;