import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Mode from "../Mode";
import MaxPage from "../MaxPage";
import Button from "../Button";
import { PriceContext } from "../../App";
import runSingleModeScript from "../../helpers/runSingleModeScript";
import multiModeSearch from "../../helpers/multiModeSearch";

const SearchPrice = ({ tab }) => {
    //States
    const [mode, setMode] = useState("singlePage");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Contexts
    const { setPrice } = useContext(PriceContext);

    // Effects
    useEffect(() => {
        // Get current mode from storage
        chrome.storage.sync.get("mode", ({ mode }) => {
            setMode(mode);
        });
    }, []);

    // Handlers
    const handleButtonClick = async (e) => {
        e.preventDefault();

        if (mode === "singlePage") runSingleModeScript(tab);

        if (mode === "multiPage") {
            await multiModeSearch(tab, setError, setPrice, setLoading);
        }
    };

    const handleModeChange = (e) => {
        setMode(e.target.value);
        chrome.storage.sync.set({ mode: e.target.value });
    };

    // JSX
    return (
        <div className={styles.container}>
            {loading ? (
                <>
                    <Button text={"Processing..."} />
                    <h4 className={styles.loadingMessage}>
                        Might take few minutes
                    </h4>
                    <h4 className={styles.loadingMessage}>
                        Close the popup to cancel
                    </h4>
                </>
            ) : (
                <Button
                    text={"Calculate Average"}
                    handleClick={handleButtonClick}
                />
            )}
            <p className="error center">{error}</p>
            <Mode handleChange={handleModeChange} value={mode} />
            {mode === "multiPage" && <MaxPage />}
        </div>
    );
};

export default SearchPrice;
