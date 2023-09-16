import React from "react";

import Button from "./Button.jsx";
import "../../styles/index.css";

const Jumbotron = () => {
    return (
        <div className="p-0 mt-3 bg-body-tertiary">
            <div className="container p-5 jumbo rounded-1">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ullamcorper leo eu rutrum. Vivamus lacus eros, blandit venenatis risus et, maximus venenatis nisl.</p>
                <Button button="btn btn-primary btn-lg" buttonText="Call to action!" />
            </div>
        </div>
    );
};

export default Jumbotron;