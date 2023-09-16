import React from "react";

import "../../styles/index.css";

import Jumbotron from "../component/Jumbotron.jsx";
import NavBar from "../component/NavBar.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";


const App = () => {

    const cardData = [
        { button: "btn btn-primary mx-auto", image: "https://i.pickadummy.com/300x100?contrast=-2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lorem eget quam vehicula elementum a eu nulla. Cras a ipsum facilisis, lobortis turpis quis, placerat libero." },
        { button: "btn btn-primary mx-auto", image: "https://i.pickadummy.com/300x100?contrast=-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lorem eget quam vehicula elementum a eu nulla. Cras a ipsum facilisis, lobortis turpis quis, placerat libero." },
        { button: "btn btn-primary mx-auto", image: "https://i.pickadummy.com/300x100?contrast=0", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lorem eget quam vehicula elementum a eu nulla. Cras a ipsum facilisis, lobortis turpis quis, placerat libero." },
        { button: "btn btn-primary mx-auto", image: "https://i.pickadummy.com/300x100?contrast=1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lorem eget quam vehicula elementum a eu nulla. Cras a ipsum facilisis, lobortis turpis quis, placerat libero." }
    ]

    return (
        <>
            <div className="bg-secondary">
                <NavBar />
            </div><div className="container">

                <div className='row d-flex justify-content-between'>
                    <Jumbotron />
                    {cardData.map((card, index) => (
                        <Card key={card.index} button={card.button} image={card.image} text={card.text} />
                    ))}
                </div>

            </div>
            <div className="static-bottom bg-secondary p-3">
                <Footer />
            </div>
        </>
    );
};

export default App;