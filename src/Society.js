import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from './client';
import './Society.css'
import Header from './components/Header'
import Footer from './components/Footer'

const Society = () => {
    const { slug } = useParams();
    const [info, setinfo] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]`).then((data)=>setinfo(data))
      }, [slug])
      console.log(info);
    return (<div>
        <Header/>
        <div className='profile'>
            <div className='profile-left'>
                <img src='./society_logo.png' className='profile-logo' alt='society logo'></img>
            </div>
            <div className='profile-right'>
                <h1 data-text="AniMation">MLSAC</h1>
                <h4>Date of establishment - </h4>
                <h4>Type - </h4>
            </div>
        </div>
        <div className='about-us'>
            <h1 data-text="AniMation">About Us</h1>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
        </div>
        <Footer/>
    </div>);
}
 
export default Society;