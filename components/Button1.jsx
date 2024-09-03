import React from 'react';
import './Button1.css';
import styles from './PostButton1.module.css'

const Button1 = () => {
    return (
        <div>
            {/* <button className='button'>버튼1</button> */}
            <button className={styles.button}>버튼1</button>
        </div>
    );
};

export default Button1;