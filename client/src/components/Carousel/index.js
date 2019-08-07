import React from "react";
import "./Carousel.css";

function Carousel(props) {
    return (
        <div className="Carousel">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                  
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide"></img>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"></img>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carousel; 