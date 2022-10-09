import React from 'react'

const Card = ({cardData}) => {
  return (
    <>

    <section className='flipcard-container'>
    {
    cardData.map((curElem, i) => {
        return(
            <div className='Society_cards' key={i}>
            <div className="card-front">
                <img src={curElem.image} className='image' />
                <h6>{curElem.name}</h6>
                <span className='categ'> {curElem.category} </span>
            </div>
            <div className="card-back">
                <p className='para'>{curElem.description}</p>
                <div className='links'>
                <a href={curElem.link} target="blank"><img src={curElem.site} className='img' /> </a>
                <a href={curElem.link2} target="blank"><img src={curElem.insta} className='img' /> </a>
                <a href={curElem.link1} target="blank"><img src={curElem.img} className='img' /> </a>
                </div>
            </div>
        </div>
        );
    })
    }
    </section>
    </>
  );
};

export default Card