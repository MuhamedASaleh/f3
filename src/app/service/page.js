
import NavBar from '@/Components/NavBar'
import Blog from "@/Components/Service/Blog"
import CallSection from "@/Components/Service/CallSection"
import Testimonials from "@/Components/Service/Testimonials"
import Footer from "@/Components/Footer"
import Image from "next/image"

import ServiceImg from "@/Image/service-back.jpg"

export const metadata = {
    title: 'Service',
    description: 'Welcome Service',
}
export default function Service() {
    return (
        <>
            <div className='service-page-all'>
                <NavBar />
                <div className='head-section-service'>
                    <div className='service-text container'>
                        <h1>Service</h1>
                        <p>
                            <span className='home'>Home /</span>
                            <span> Service</span>
                        </p>
                    </div>
                </div>
                <Blog />
                <CallSection />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}