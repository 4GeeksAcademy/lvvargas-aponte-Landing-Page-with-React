import React from "react";

import Button from "../component/Button.jsx"

const Card = ({ button, image, text }) => {

  return (
    <div className="card p-0 my-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold text-center">Card title</h5>
        <p className="card-text text-center">{text}</p>
        <div className="text-center border-top border-secpondary pt-3">
          <Button button={button} buttonText="Find Out More!" />
        </div>
      </div>
    </div>
  );
};

export default Card;