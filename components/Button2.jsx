import React from 'react';
import './Button2.css'
import styles from './PostButton2.module.css'


const Button2 = () => {
    return (
        <div>
            {/* <button className="button">버튼2</button> */}
            <button className={styles.button}>버튼2</button>
        </div>
    );
};

export default Button2;