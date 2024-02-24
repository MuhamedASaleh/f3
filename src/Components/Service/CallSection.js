"use client";

import Image from "next/image";

import Phone from "@/Image/phones-2.jpg";
import Call1 from "@/Image/call-1.png";
import Call2 from "@/Image/call-2.png";

export default function CallSection() {
    return (
        <>
            <div className="container">
                <div className="call-section">
                    <div className="call-text">
                        <h1>Our call, anytime, anywhere!</h1>
                        <h3>
                            We are always ready to help you.
                        </h3>
                        <span className="under-line"></span>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                            accumsan lacus vel facilisis.
                        </p>
                        <div className="logo-section">
                            <Image src={Call1} alt="phone" />
                            <Image src={Call2} alt="phone" />
                        </div>
                    </div>
                    <div className="call-img">
                        <Image src={Phone} alt="phone" />
                    </div>
                </div>
            </div>
            <div className="count-client">
                <div className="item">
                    <i className="fa-solid fa-users"></i>
                    <h3>3568</h3>
                    <p>Project done</p>
                </div>
                <div className="item">
                    <i className="fa-solid fa-users"></i>
                    <h3>47842</h3>
                    <p>HAPPY CLIENTS</p>
                </div>
                <div className="item">
                    <i className="fa-solid fa-users"></i>
                    <h3>1354</h3>
                    <p>AWESOME CALLS</p>
                </div>
            </div>
        </>
    );
}
