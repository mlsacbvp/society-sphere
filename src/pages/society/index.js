import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import './Society.css'
import Footer from '../../components/Global/Footer';
import Header from '../../components/Global/Header';
import ImageUrlBuilder from '@sanity/image-url';

const Society = () => {
    const { slug } = useParams();
    const [info, setinfo] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]`).then((data) => setinfo(data))
    }, [slug])
    // console.log(info);

    const builder = ImageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }

    return (
        <div className='society'>
            <Header />

            {info && info.map((society) => {
                return (
                    <div key={society.slug.current} className="society-container">
                        <div className='profile'>
                            <div className='profile-left'>
                                <img src={urlFor(society.logo).url()} className='profile-logo' alt='society logo'></img>
                            </div>

                            <div className='profile-right'>
                                <h2>{society.name}</h2>
                                <p>Faculty Coordinator - {society.facultyHead}</p>
                                <p>Chairperson - {society.chairperson}</p>
                                <p>Vice Chairperson - {society.viceChairperson}</p>
                                <p>Year of establishment - {society.date?.slice(0, 4)}</p>
                                <p>Type - {society.category}</p>
                            </div>
                        </div>

                        <div className='about-us'>
                            <h2>About</h2>
                            <p>{society.about}</p>
                        </div>

                        {society.recentEvent1_img &&
                            <div className='society_recent_event_section'>
                                <h2>Recent Events</h2>
                                <div className='society_recentEvent_card'>
                                    <img src={urlFor(society.recentEvent1_img).url()} alt="event_poster" />
                                    <div className='society_recentEvent_card_info'>
                                        <h3>{society.recentEvent1_title}</h3>
                                        <p>{society.recentEvent1_desc}</p>
                                    </div>
                                </div>

                                <div className='society_recentEvent_card'>
                                    <img src={urlFor(society.recentEvent2_img).url()} alt="event_poster" />
                                    <div className='society_recentEvent_card_info'>
                                        <h3>{society.recentEvent2_title}</h3>
                                        <p>{society.recentEvent2_desc}</p>
                                    </div>
                                </div>

                                <div className='society_recentEvent_card'>
                                    <img src={urlFor(society.recentEvent3_img).url()} alt="event_poster" />
                                    <div className='society_recentEvent_card_info'>
                                        <h3>{society.recentEvent3_title}</h3>
                                        <p>{society.recentEvent3_desc}</p>
                                    </div>
                                </div>
                            </div>}
                    </div>
                )
            })}

            <Footer />
        </div>);
}

export default Society;