import React from "react";
import styles from "./styles.module.css";

const SearchPrize = ({ tab }) => {
    const handleClick = (e) => {
        e.preventDefault();
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: calculateAverage,
        });
    };
    return (
        <button className={`${styles.button}`} onClick={handleClick}>
            Average Price
        </button>
    );
};

function calculateAverage() {
    const prices = document.getElementsByClassName("a-price-whole");
    total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += parseInt(prices[i].innerText.split("\n")[0]);
    }

    console.log(total); // Dev -------------------------------------------------

    // Send message to popup
    chrome.runtime.sendMessage({
        data: total,
    });
}

export default SearchPrize;
