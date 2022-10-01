import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const MaxPage = ({}) => {
    // States
    const [value, setValue] = useState(8);

    // Effects
    useEffect(() => {
        // Get current maxPage value from storage
        chrome.storage.sync.get("maxPages", ({ maxPages }) => {
            setValue(maxPages);
        });
    }, []);

    // Handles
    const handleChange = (e) => {
        const maxPages = parseInt(e.target.value);
        if (maxPages > 0 && maxPages < 100) {
            setValue(maxPages);
            chrome.storage.sync.set({ maxPages });
        }
    };

    // JSX
    return (
        <div>
            <h3>Max Pages: </h3>
            <input
                className={styles.input}
                type="number"
                value={value}
                onChange={handleChange}
                placeholder="default 8"
            />
        </div>
    );
};

export default MaxPage;
