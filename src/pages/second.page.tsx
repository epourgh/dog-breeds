import React, { useState } from "react";
import styles from '../styles/Global.module.scss'

const SecondPage: React.FC = () => {
    return (
        <div className={styles.styledDiv}>
            <h2 className={styles.changeH1}>Second Component</h2>
        </div>
    );
}

export default SecondPage;
