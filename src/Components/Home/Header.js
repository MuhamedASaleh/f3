'use client'
import React, { useState, useEffect } from 'react'

import Image from "next/image"

import Logo from "@/Image/logo.png"
import Header1 from "@/Image/header-1.jpg"
import Header2 from "@/Image/slide-4-1-2.jpg"


import axios from 'axios'
export default function Header(props) {

    // const { scrollY, baseUrl, headers } = props

    const [scrollY, setScrollY] = useState(0);

    const [data, setData] = useState([])


    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // axios.get(`${baseUrl}/landing`, {
        //     headers: {
        //         "Accept-Language": "en"
        //     }
        // }).then((res) => {
        //     setData(res.data)
        //     // console.log(res.data)
        // }).catch((err) => {
        //     console.log(err);
        // })


    }, [])

    return (
        <div className='header-section'>
            <div className={`overlay ${scrollY > 620 ? "fixed-overlay" : ""}`}> </div>
            <div className={`head-section`}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active first-item">
                            {/* <Image src={Header1} alt="Picture of the author" /> */}
                            {
                                data.length > 0 ? (
                                    <div className="carousel-caption d-none d-md-block" key={data[0].title}>
                                        <h5>{data[0].title}</h5>
                                        <span className="under-line"></span>
                                        <p>{data[0].description}</p>
                                    </div>
                                ) : ""
                            }
                        </div>
                        <div className="carousel-item second-item">
                            {/* <Image src={Header2} alt="Picture of the author" /> */}
                            {
                                data.length > 0 ? (
                                    <div className="carousel-caption d-none d-md-block" key={data[1].title}>
                                        <h5>{data[1].title}</h5>
                                        <span className="under-line"></span>
                                        <p>{data[1].description}</p>
                                    </div>
                                ) : ""
                            }

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}