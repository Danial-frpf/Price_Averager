import calculateAverage from "./calculateAverage";

const runSingleModeScript = (tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: calculateAverage,
    });
};

export default runSingleModeScript;
