import React from 'react'

const Card = ({cardData}) => {
  return (
    <>

    <section className='flipcard-container'>
    {
    cardData.map((curElem) => {
        return(
            <>
            <div className='card' key={curElem.id}>
            <div className="card-front">
                <img src={curElem.image} className='img' />
                <h6>{curElem.name}</h6>
                <span className='categ'> {curElem.category} </span>
            </div>
            <div className="card-back">
                <p className='para'>{curElem.description}</p>
            </div>
        </div>
        </>
        );
    })
    }
    </section>
    </>
  );
};

export default Card