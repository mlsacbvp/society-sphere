import React, {useState, useEffect} from 'react';
import sanityClient from "../client";
import './FlipCard.css';
import Card from "./Card";



const FlipCard = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type=="society"]`).then((res)=>{setData(res)}).catch(console.error);
      }, [])
    //   console.log(data);
    // const filterItem = (category) => {
    //     const updatedList = Data.filter((curElem) => {
    //         return curElem.category === category;
    //     });
    //     setCardData(updatedList);
    //     console.log(cardData)
    // }
    return (

        <div id="FlipCard" className='flipCard'>
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
            <div className='flipCard_header'>
            <h1>Societies</h1>
            <select classname="form-select departments" aria-label="Default select example">
                {/* <option className="btn-item" selected value="Empty" onClick={() => setCardData(Data)}>-*-</option> */}
                <option className="btn-item" value="All">All</option>
                <option className="btn-item" value="Technical">Technical</option>
                <option className="btn-item" value="Non-Technical">Non-Technical</option>
                <option className="btn-item" value="Cells">Cells</option>
                <option className="btn-item" value="Cultural">Cultural</option>
            </select>
            </div>
            {/* <div className="btn-group">
        <button className="btn-item" onClick={() => filterItem("Technical")}>Technical</button>
        <button className="btn-item" onClick={() => filterItem("Non-Technical")}>Non-Technical</button>
        <button className="btn-item" onClick={() => filterItem("Cells")}>Cells</button>
        <button className="btn-item" onClick={() => filterItem("Cultural")}>Cultural</button>
        <button className="btn-item" onClick={() => setCardData(Data)}>ALL</button>
      </div> */}
            <Card cardData={data} />
        </div>
    )
}

export default FlipCard;