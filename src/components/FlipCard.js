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
        console.log(cardData)
    }
    return (

        <>
            {/* <datalist id="departments">
                <option value="Technical" onClick={() => filterItem("Technical")}>Hello</option>
                <option value="Non-Technical" onClick={() => filterItem("Non-Technical")}></option>
                <option value="Cells" onClick={() => filterItem("Cells")}></option>
                <option value="Cultural" onClick={() => filterItem("Cultural")}></option>
                <option value="ALL" onClick={() => setCardData(Data)}></option>
                <option value="Monaco"></option>
                <option value="Roboto"></option>
                <option value="Poppins"></option>
            </datalist> */}
            <select classname="form-select departments" aria-label="Default select example">
                {/* <option className="btn-item" selected value="Empty" onClick={() => setCardData(Data)}>-*-</option> */}
                <option className="btn-item" value="All" onClick={() => setCardData(Data)}>All</option>
                <option className="btn-item" value="Technical" onClick={() => filterItem("Technical")}>Technical</option>
                <option className="btn-item" value="Non-Technical" onClick={() => filterItem("Non-Technical")}>Non-Technical</option>
                <option className="btn-item" value="Cells" onClick={() => filterItem("Cells")}>Cells</option>
                <option className="btn-item" value="Cultural" onClick={() => filterItem("Cultural")}>Cultural</option>
            </select>
            {/* <div className="btn-group">
        <button className="btn-item" onClick={() => filterItem("Technical")}>Technical</button>
        <button className="btn-item" onClick={() => filterItem("Non-Technical")}>Non-Technical</button>
        <button className="btn-item" onClick={() => filterItem("Cells")}>Cells</button>
        <button className="btn-item" onClick={() => filterItem("Cultural")}>Cultural</button>
        <button className="btn-item" onClick={() => setCardData(Data)}>ALL</button>
      </div> */}
            <Card cardData={cardData} />
        </>
    )
}

export default FlipCard;