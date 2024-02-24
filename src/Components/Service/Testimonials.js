"use client";
import React, { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import Avatar from "@/Image/avatar.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonials() {
    return (
        <>
            <div className="testi-box-all">
                <div className="testi">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination , Autoplay]}
                        className="mySwiper"
                    >
                        <div>
                            <SwiperSlide>
                                <div className="item-testi">
                                    <div className="text-p-testi">
                                        <p>
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                            commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                    </div>
                                    <div className="box-wrap">
                                        <div className="img-testi">
                                            <Image src={Avatar} alt="avatar" />
                                        </div>
                                        <div className="text-testi">
                                            <h3>John Doe</h3>
                                            <p>Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-testi">
                                    <div className="text-p-testi">
                                        <p>
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                            commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                    </div>
                                    <div className="box-wrap">
                                        <div className="img-testi">
                                            <Image src={Avatar} alt="avatar" />
                                        </div>
                                        <div className="text-testi">
                                            <h3>John Doe</h3>
                                            <p>Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-testi">
                                    <div className="text-p-testi">
                                        <p>
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                            commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                    </div>
                                    <div className="box-wrap">
                                        <div className="img-testi">
                                            <Image src={Avatar} alt="avatar" />
                                        </div>
                                        <div className="text-testi">
                                            <h3>John Doe</h3>
                                            <p>Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
