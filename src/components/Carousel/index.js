import React from 'react';
import './style.css';

const Carousel = () => {
    return (
        <div id='RecentEventCarousel' className='Carousel'>
            <h1>RECENT EVENTS</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                        <img src="https://wallpapercave.com/dwp2x/wp3788222.jpg" className="carousel_img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel