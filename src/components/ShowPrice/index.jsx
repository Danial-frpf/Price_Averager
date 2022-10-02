import React, { useContext, useEffect } from "react";
import { PriceContext } from "../../App";
import styles from "./styles.module.css";

const ShowPrice = () => {
    // States
    const { price, setPrice } = useContext(PriceContext);

    // Effects
    useEffect(() => {
        // Get recent price from storage
        chrome.storage.sync.get("averagePrice", ({ averagePrice }) => {
            setPrice(averagePrice);
        });
    }, []);

    // JSX
    return <h3 className={styles.priceText}>Average Price: {price}</h3>;
};

export default ShowPrice;
