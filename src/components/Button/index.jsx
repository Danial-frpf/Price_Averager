import React from "react";
import styles from "./styles.module.css";

const Button = ({ text, handleClick }) => {
    return (
        <button className={`${styles.Button}`} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
