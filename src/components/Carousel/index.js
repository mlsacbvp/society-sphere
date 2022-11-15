import React, { useEffect, useState } from 'react';
import './style.css';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

const Slider = () => {
    const [carouselData, setcarouselData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type=="recent"]`
        ).then(
            (res) => { setcarouselData(res) }
        ).catch(console.error);
    }, [])
    // console.log(carouselData);

    let carouselDataPosters = []
    carouselData?.forEach((element) => {
        carouselDataPosters.push(element.poster1, element.poster2, element.poster3)
    });

    console.log(carouselDataPosters);

    const builder = ImageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }
    return (
        <div id='RecentEventCarousel' className='recent-events-carousel'>
            <h1 className='carousel-heading'>RECENT EVENTS</h1>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showIndicators={false}
                showStatus={false}
                // showArrows={false}
                showThumbs={false}
                interval={5000}
                className="home-page__web-slider"
            >
                {carouselData && carouselData.map((event, index) => {
                    return (
                        <div className="recent-events-carousel-item">
                            <img src={urlFor(event.poster1).url()} className="carousel_img" alt={event.poster1.alt} />
                            <img src={urlFor(event.poster2).url()} className="carousel_img" alt={event.poster2.alt} />
                            <img src={urlFor(event.poster3).url()} className="carousel_img" alt={event.poster3.alt} />
                        </div>
                    )
                })}
            </Carousel>

            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                // showIndicators={false}
                showStatus={false}
                // showArrows={false}
                showThumbs={false}
                interval={5000}
                className="home-page__phone-slider"
            >
                {carouselDataPosters && carouselDataPosters.map((event, index) => {
                    return (
                        <>
                            <div className="recent-events-carousel-item">
                                <img src={urlFor(event).url()} className="carousel_img_phone" alt={event.alt} />
                            </div>
                        </>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Slider;