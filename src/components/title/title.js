import React from 'react';
import styles from './title.module.css';

const Title = ({title}) => {
    return (
        <div>
            <h1 className={styles['page-title']}>{title}</h1>
        </div>
    )
}

export default Title;



