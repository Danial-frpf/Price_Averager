import React, { useCallback, useEffect, useState } from "react";
import SearchPrize from "./components/SearchPrize";

const App = () => {
    const [tab, setTab] = useState(null);
    const [price, setPrice] = useState(null);
    const getCurrentTab = useCallback(async () => {
        let [currentTab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });
        setTab(currentTab);
    }, []);
    useEffect(() => {
        getCurrentTab();
        chrome.runtime.onMessage.addListener(
            (message, sender, sendResponse) => {
                setPrice(message.data);
            }
        );
    }, []);
    if (tab?.url?.startsWith("https://www.amazon.com/s?k=")) {
        return (
            <>
                <p>{price}</p>
                <SearchPrize tab={tab} />
            </>
        );
    }
    if (tab?.url?.startsWith("https://www.amazon.com")) {
        return <h3>Search an item</h3>;
    }
    return <h3>Works only on Amazon</h3>;
};

export default App;
