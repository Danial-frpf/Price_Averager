chrome.runtime.onInstalled.addListener(() => {
    const maxPages = 1;
    const averagePrice = "00.00$";
    const mode = "singlePage";
    chrome.storage.sync.set({ maxPages });
    chrome.storage.sync.set({ averagePrice });
    chrome.storage.sync.set({ mode });
});
