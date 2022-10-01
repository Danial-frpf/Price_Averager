import React from "react";
import styles from "./styles.module.css";

const Mode = ({ handleChange, value }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Mode: </h2>
            <select
                className={styles.selection}
                name="mode"
                id="mode"
                value={value}
                onChange={handleChange}
            >
                <option value="singlePage">Single-Page</option>
                <option value="multiPage">Multi-Page</option>
            </select>
        </div>
    );
};

export default Mode;
