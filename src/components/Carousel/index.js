import React, { useEffect, useState } from 'react';
import './style.css';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

const Carousel = () => {
    const [carouselData, setcarouselData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(
            `*[_type=="recent"]`
        ).then(
            (res) => { setcarouselData(res) }
        ).catch(console.error);
    }, [])
    console.log(carouselData);
    const builder = ImageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }
    return (
        <div id='RecentEventCarousel' className='Carousel'>
            <h1>RECENT EVENTS</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                {carouselData && carouselData.map((event, index) => {
                    return (
                        <div className="carousel-inner">
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img src={urlFor(event.poster1).url()} className="carousel_img" alt={event.poster1.alt} />
                                <img src={urlFor(event.poster2).url()} className="carousel_img" alt={event.poster2.alt} />
                                <img src={urlFor(event.poster3).url()} className="carousel_img" alt={event.poster3.alt} />
                            </div>
                        </div>
                    )
                })}
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