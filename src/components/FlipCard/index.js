import React, { useState, useEffect } from 'react';
import sanityClient from "../../client";
import './style.css';

import Card from "../Card";
import PhoneCard from '../PhoneCard';

const FlipCard = () => {
    const [data, setData] = useState(null);
    const [cat, setcat] = useState('["Non-Technical", "Technical", "Cultural", "Cells"]');

    useEffect(() => {
        sanityClient.fetch(
            `*[_type=="society" && category in ${cat}]`
        ).then(
            (res) => { setData(res) }
        ).catch(console.error);
    }, [cat])
    // console.log(data);
    const handleChange = (e) => {
        if (e.target.value === "Technical") {
            setcat('["Technical"]');
        }
        else if (e.target.value === "Non-Technical") {
            setcat('["Non-Technical"]');
        }
        else if (e.target.value === "Cultural") {
            setcat('["Cultural"]');
        }
        else if (e.target.value === "Cells") {
            setcat('["Cells"]');
        }
        else {
            setcat('["Non-Technical", "Technical", "Cultural", "Cells"]');
        }
    }

    return (

        <div id='FlipCardId' className='flipCard'>
            <div className='flipCard_header'>
                <h1>Societies</h1>
                <select className="form-select departments" aria-label="Default select example" onChange={handleChange}>
                    <option className="btn-item" value="All">All Societies</option>
                    <option className="btn-item" value="Technical">Technical</option>
                    <option className="btn-item" value="Non-Technical">Non-Technical</option>
                    <option className="btn-item" value="Cells">Cells</option>
                    <option className="btn-item" value="Cultural">Cultural</option>
                </select>
            </div>
            <Card cardData={data} key={(data && data.length)+1} />
            <PhoneCard cardData={data} key={(data && data.length)+2}/>
        </div>
    )
}

export default FlipCard;