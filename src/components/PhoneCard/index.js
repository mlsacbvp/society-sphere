import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

const PhoneCard = ({cardData}) => {
    console.log("cardData:", cardData);
    const builder = ImageUrlBuilder(sanityClient);
    function urlFor(source) {
      return builder.image(source);
    }
  return (
    <div className='PhoneCard_container'>
        {cardData && cardData.map((society, index)=>{
            return(
                <Link to={"/society/" + society.slug.current} key={society.slug.current}>
                <div className='PhoneCard'>
                    <img src={urlFor(society.logo).url()}/>
                    <span>{society.name}</span>
                </div>   
                </Link> 
            )
        })}
    </div>
  )
}

export default PhoneCard;