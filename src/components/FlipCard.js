import './FlipCard.css';
import Data from "./CardData.js";
import Card from "./Card";
import { useState } from 'react';


const FlipCard = () => {
    const [cardData, setCardData] = useState(Data);

    return(
        
        <>
        <h1 className="head1" id='head1'> SOCIETIES</h1>
    {/* <nav className="navbar">
        <div className="btn">
            <button className="btn-item">Non-Technical</button>
            <button className="btn-item">Technical</button>
            <button className="btn-item">Cells</button>
            <button className="btn-item">Cultural</button>
            <button className="btn-item">ALL</button>
        </div>
    </nav> */}


        <Card cardData={cardData} />
        </>
    )
}

export default FlipCard;