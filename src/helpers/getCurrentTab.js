const getCurrentTab = async (setState) => {
    let [currentTab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });
    setState(currentTab);
};

export default getCurrentTab;
