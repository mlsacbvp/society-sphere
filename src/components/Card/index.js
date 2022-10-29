import React from 'react';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            <div className='Society_cards' key={curElem.slug.current}>
              <div className="card-front">
                <img src={urlFor(curElem.logo).url()} className='image' alt="logo" />
                <h6>{curElem.name}</h6>
                <span className='categ'> {curElem.category} </span>
              </div>
              <div className="card-back">
                <Link to={"/society/" + curElem.slug.current}>
                  <p className='para'>{curElem.about.slice(0, 80)}...</p>
                </Link>
                <div className='links'>
                  <a href={curElem.website} target="_blank" rel="noreferrer"><LinkIcon/></a>
                  <a href={curElem.instagram} target="_blank" rel="noreferrer"><InstagramIcon/></a>
                  <a href={curElem.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  );
};

export default Card