import React from "react";

import "../../styles/index.css";

const NavBar = () => {
    return (
        < nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <div className="row float-end">
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse float-start " id="navbarNav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav >);
};

export default NavBar;