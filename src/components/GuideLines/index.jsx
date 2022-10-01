import React from "react";
import styles from "./styles.module.css";

const GuideLines = () => {
    return (
        <div className={styles.container}>
            <h1 className="center">Guidelines</h1>
            <br />
            <ul>
                <li>
                    The extension is activated whenever you make a search on
                    amazon.
                </li>
                <li>When not on amazon you can use custom search.</li>
            </ul>
            <br />
            <h3 className="error">Limitations:</h3>
            <ul>
                <li className="error">
                    Can only perform one multiPage request at a time.
                </li>
                <li className="error">
                    Multi page bot cannot pass "are you human" check.
                </li>
                <li className="error">
                    If there is "are you human" check the request fails.
                </li>
            </ul>
            <br />
            <h2 className="center">Modes</h2>
            <h3>Single Page:</h3>
            <ul>
                <li>It injects javascript in the active tab.</li>
                <li>
                    And only gets the average price of products currently
                    visible in result.
                </li>
            </ul>
            <br />
            <h3>Multi Page:</h3>
            <ul>
                <li>It sends request to a nodejs server.</li>
                <li>The server calculates the average price.</li>
                <li>
                    Lower number of pages means fast result but includes less
                    products.
                </li>
            </ul>
            <br />
            <h3>Custom Search:</h3>
            <ul>
                <li>Uses Multi Page mode.</li>
                <li>Makes headless search on amazon.com.</li>
                <li>Returns average price.</li>
            </ul>
            <br />
            <h3>Note:</h3>
            <ul>
                <li>Works only on amazon.com search pages.</li>
            </ul>
            <br />
            <h3>Tips:</h3>
            <ul>
                <li>Try to make the search as specific as possible.</li>
                <li>
                    "Pakistan cricket jersey 2022" rather than "cricket jersey".
                </li>
            </ul>
        </div>
    );
};

export default GuideLines;
