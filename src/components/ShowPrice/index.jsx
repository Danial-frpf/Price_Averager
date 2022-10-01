import React, { useContext, useEffect } from "react";
import { PriceContext } from "../../App";
import { PRICE_CHANGE_SIGNAL } from "../../helpers/constants";
import styles from "./styles.module.css";

const ShowPrice = () => {
    // States
    const { price, setPrice } = useContext(PriceContext);

    // Effects
    useEffect(() => {
        // Add listener for price change
        chrome.runtime.onMessage.addListener((message) => {
            if (message.signalType === PRICE_CHANGE_SIGNAL)
                setPrice(`${message.data}$`);
            chrome.storage.sync.set({ averagePrice: `${message.data}$` });
        });

        // Get recent price from storage
        chrome.storage.sync.get("averagePrice", ({ averagePrice }) => {
            setPrice(averagePrice);
        });
    }, []);

    // JSX
    return <h3 className={styles.priceText}>Average Price: {price}</h3>;
};

export default ShowPrice;
