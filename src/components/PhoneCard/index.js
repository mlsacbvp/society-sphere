import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import ImageUrlBuilder from "@sanity/image-url";
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PhoneCard = ({ cardData }) => {
  // console.log("cardData:", cardData);

  const builder = ImageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="PhoneCard_container">
      {cardData &&
        cardData.map((society, index) => {
          return (
            
             
              <div  class="card">
                {/* <button id="crossbutton" onclick="remove_hover()">
                  x
                </button> */}
                <div class="head">
                  <h1>{society.name}</h1>
                </div>
                <div class="imgbox">
                  <img src={urlFor(society.logo).url()} />
                </div>

                <div class="main-content">
                  <p>{society.about.slice(0, 80)}...</p>
                </div>

                <div className="links">
                  <a href={"/society/" + society.slug.current} target="_blank" rel="noreferrer">
                    <LinkIcon />
                  </a>
                  <a href={society.instagram} target="_blank" rel="noreferrer">
                    <InstagramIcon />
                  </a>
                  <a href={society.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            // </Link>
          );
        })}
    </div>
  );
};

export default PhoneCard;
