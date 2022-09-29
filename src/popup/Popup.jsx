import React from "react";
import { render } from "react-dom";

const Popup = () => {
    return (
        <div>
            <h1>Price Averager</h1>
            <p>300</p>
        </div>
    );
};

render(<Popup />, document.getElementById("root"));
