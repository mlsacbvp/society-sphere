import React from 'react';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';

const Card = ({ cardData }) => {

  const builder = ImageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      <section className='flipcard-container'>
        {cardData && cardData.map((curElem, i) => {
          return (
            <Link key={i} to={"/society/" + curElem.slug.current}>
              <div className='Society_cards'>

                <div className="card-front">
                  <img src={urlFor(curElem.logo).url()} className='image' alt="logo" />
                  <h6>{curElem.name}</h6>
                  <span className='categ'> {curElem.category} </span>
                </div>

                <div className="card-back">
                  <p className='para'>{curElem.about.slice(0, 80)}...</p>
                  <div className='links'>
                    <a href={curElem.website} target="_blank" rel="noreferrer"><img src="images/Link-icon.jpg" className='img' alt="social" /> </a>
                    <a href={curElem.instagram} target="_blank" rel="noreferrer"><img src="images/Instagram-icon.jpg" className='img' alt="social" /> </a>
                    <a href={curElem.linkedin} target="_blank" rel="noreferrer"><img src="images/Linkedin-icon.png" className='img' alt="social" /> </a>
                  </div>
                </div>

              </div>
            </Link>
          )
        })}
      </section>
    </>
  );
};

export default Card