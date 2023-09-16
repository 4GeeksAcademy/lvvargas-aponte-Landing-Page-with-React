import React from "react";


const Button = (props) => {

    let buttonStyle = ''

    if (props.button === 'btn btn-primary mx-auto') {
        buttonStyle = 'btn btn-primary mx-auto';
    } else {
        buttonStyle = 'btn btn-primary btn-lg';
    };

    return (<button type="button" className={buttonStyle}>{props.buttonText}</button>);
};

export default Button;