'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from './page.module.css'

import NavBar from "@/Components/NavBar"
import Service from "@/Components/Home/Service"
import Questions from "@/Components/Home/Questions"
import Call from "@/Components/Home/Call"
import Contact from "@/Components/Home/Contact"
import Footer from "@/Components/Footer"
import Header from "@/Components/Home/Header"


// const baseUrl= "http://192.168.1.6:8001"
const baseUrl = "http://52.23.234.42/api"
const headers = {
  headers: {
    "Accept-Language": "en"
  }

}


export default function Home() {

  // const [scrollY, setScrollY] = useState(0);

  // // const [data, setData] = useState([])

  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    import("bootstrap/dist/js/bootstrap")

    axios.get("https://latest2-j9ic.onrender.com/item").then((res) => {
      // setData(res.data)
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })

    //   // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
  }, []);
  // console.log(scrollY);

  return (
    <>
      <NavBar baseUrl={baseUrl} headers={headers} />
      <Header baseUrl={baseUrl} headers={headers} />
      <Service baseUrl={baseUrl} />
      <Questions baseUrl={baseUrl} />
      <Call baseUrl={baseUrl} />
      <Contact baseUrl={baseUrl} />
      <Footer baseUrl={baseUrl} />
    </>
  )
}
