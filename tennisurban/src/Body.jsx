import React from "react";
import "./Body.css";

const Body = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <p>Aquí puedes explorar nuestra colección de productos.</p>
        </div>
    );
};

export default Body;