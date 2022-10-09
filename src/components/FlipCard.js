import './FlipCard.css';
import Data from "./CardData.js";
import Card from "./Card";
import { useState } from 'react';



const FlipCard = () => {
    const [cardData, setCardData] = useState(Data);

const filterItem = (category) => {
    const updatedList = Data.filter((curElem) => {
        return curElem.category === category;
    });
    setCardData(updatedList);
}   

    return(
        <>
      <div className="btn">
        <button className="btn-item" onClick={() => filterItem("Technical")}>Technical</button>
        <button className="btn-item" onClick={() => filterItem("Non-Technical")}>Non-Technical</button>
        <button className="btn-item" onClick={() => filterItem("Cells")}>Cells</button>
        <button className="btn-item" onClick={() => filterItem("Cultural")}>Cultural</button>
        <button className="btn-item" onClick={() => setCardData(Data)}>ALL</button>
      </div>
        <Card cardData={cardData} />
        </>
    )
}

export default FlipCard;