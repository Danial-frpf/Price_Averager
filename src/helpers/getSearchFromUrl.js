const getSearchFromUrl = (url) => {
    return url.split("=")[1].replaceAll("+", " ").replace("&crid", "");
};

export default getSearchFromUrl;
