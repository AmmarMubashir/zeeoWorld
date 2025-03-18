import React from 'react';
import styles from './Button.module.css';

const ButtonLayout = (props) => {
  return (
    <div className={styles.btn}>
            {props.children}
    </div>
  )
}

export default ButtonLayout;