import getSearchFromUrl from "./getSearchFromUrl";
import { io } from "socket.io-client";

const multiModeSearch = async (
    tab,
    setError,
    setPrice,
    setLoading,
    custom = false
) => {
    // Start loading and reset error
    setLoading(true);
    setError("");

    // Server url
    const SERVER_URL = "http://localhost:5000/";
    // const Heroku_URL = "https://priceaveragerserver.herokuapp.com/";

    // Signals web socket
    const SOCKET_CONNECT = "connect";
    const SOCKET_REFRESH = "refresh";
    const SOCKET_ERROR = "connect_error";
    const SOCKET_DISCONNECT = "disconnect";
    const SOCKET_AMAZON_SEARCH = "amazon-search";
    const SOCKET_AMAZON_AVG_PRICE = "average-price";
    let intervalID;

    // Get search and maxPages
    const search = custom ? tab?.url : getSearchFromUrl(tab?.url);
    const { maxPages } = await chrome.storage.sync.get("maxPages");

    try {
        // Make a web socket connection
        const socket = io(SERVER_URL, { reconnectionAttempts: 3 });

        // On network error notify and stop loading
        socket.on(SOCKET_ERROR, () => {
            setError("Network error");
            setLoading(false);
            socket.disconnect();
        });

        // On disconnect stop loading and unmount refresh loop
        socket.on(SOCKET_DISCONNECT, () => {
            setLoading(false);
            clearInterval(intervalID);
        });

        // Run this code on successful connection
        socket.on(SOCKET_CONNECT, () => {
            // Make search request
            socket.emit(SOCKET_AMAZON_SEARCH, { search, maxPages });

            // Keep the connection alive
            intervalID = setInterval(() => {
                socket.volatile.emit(SOCKET_REFRESH, "Connection refresh");
            }, 10000);

            // On response code
            socket.on(SOCKET_AMAZON_AVG_PRICE, (response) => {
                // Check response is successful
                if (response?.averagePrice !== undefined) {
                    // Store and display average price
                    chrome.storage.sync.set({
                        averagePrice: response.averagePrice,
                    });
                    setPrice(response.averagePrice);
                } else {
                    // Show error on failed response
                    setError(response.message);
                }

                // Disconnect socket
                socket.disconnect();
            });
        });
    } catch (e) {
        // Any unexpected error
        setError("Network Error");
        setLoading(false);
    }
};

export default multiModeSearch;
