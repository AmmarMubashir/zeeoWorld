import React from 'react';

import styles from './TabButton.module.css';

const TabButton = (props) => {
  return (
    <div className={styles.tabBtn}>
        {props.children}
    </div>
  )
}

export default TabButton;