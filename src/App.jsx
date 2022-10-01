import React, { createContext, useEffect, useState } from "react";
import SearchPrice from "./components/SearchPrice";
import ShowPrice from "./components/ShowPrice";
import getCurrentTab from "./helpers/getCurrentTab";
import "./globals.css";
import CustomSearch from "./components/CustomSearch";
import GuideLines from "./components/GuideLines";
import { AMAZON_URL_SEARCH_FILTER } from "./helpers/constants";

export const PriceContext = createContext(null);

const App = () => {
    // States
    const [tab, setTab] = useState(null);
    const [price, setPrice] = useState("");
    const [showCustom, setShowCustom] = useState(false);
    const [showGuideLines, setShowGuideLines] = useState(false);

    // Effects
    useEffect(() => {
        // Get current tab
        getCurrentTab(setTab);
    }, []);

    // Url Flag
    const siteFlag = tab?.url?.startsWith(AMAZON_URL_SEARCH_FILTER);

    // handlers
    const toggleShowCustom = (e) => {
        e.preventDefault();
        setShowCustom((prev) => !prev);
    };

    const toggleGuidelines = () => {
        setShowGuideLines((prev) => !prev);
    };

    // JSX
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {showGuideLines ? (
                <>
                    <h3>
                        <a onClick={toggleGuidelines}>Back</a>
                    </h3>
                    <GuideLines />
                </>
            ) : (
                <PriceContext.Provider value={{ price, setPrice }}>
                    <ShowPrice />
                    {siteFlag ? (
                        <SearchPrice tab={tab} />
                    ) : (
                        <>
                            <h4>
                                Visit amazon.com search pages to enable the app.
                            </h4>
                            <h4>
                                Or make a custom search on amazon.com from the
                                app.
                            </h4>
                        </>
                    )}
                    <h3>
                        <a onClick={toggleShowCustom}>
                            {showCustom
                                ? "Hide Custom Search"
                                : "Show Custom Search"}
                        </a>
                    </h3>
                    {showCustom && <CustomSearch />}
                    <h3>
                        <a onClick={toggleGuidelines}>Guidelines </a>
                    </h3>
                </PriceContext.Provider>
            )}
        </div>
    );
};

export default App;
