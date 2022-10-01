import React, { useContext, useState } from "react";
import { PriceContext } from "../../App";
import multiModeSearch from "../../helpers/multiModeSearch";
import Button from "../Button";
import MaxPage from "../MaxPage";
import styles from "./styles.module.css";

const CustomSearch = () => {
    //States
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [value, setValue] = useState("");

    // Contexts
    const { setPrice } = useContext(PriceContext);

    // Handlers
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (value === "") {
            setError("Empty search");
            return;
        }

        await multiModeSearch(
            { url: value },
            setError,
            setPrice,
            setLoading,
            true
        );
    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    // JSX
    return (
        <div className={styles.container}>
            <h3 className="center">Make Custom Amazon Search</h3>
            <form className={styles.container} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={value}
                    onChange={handleInputChange}
                />
                <p className="error center">{error}</p>
                {loading ? (
                    <>
                        <Button
                            text={"Processing..."}
                            handleClick={(e) => {
                                e.preventDefault();
                            }}
                        />
                        <h4 className={styles.loadingMessage}>
                            Might take few minutes
                        </h4>
                        <h4 className={styles.loadingMessage}>
                            Close the popup to cancel
                        </h4>
                    </>
                ) : (
                    <Button text={"Calculate Average"} />
                )}
            </form>

            <MaxPage />
        </div>
    );
};

export default CustomSearch;
