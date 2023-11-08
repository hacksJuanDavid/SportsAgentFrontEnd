"use client";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function CarouselOurTeam() {
    const images = [
        "/people/person1.png",
        "/people/person2.png",
        "/people/person3.png",
        "/people/person4.png",
        "/people/person5.png",
        "/people/person6.png",
    ];

    const names = ["John Doe", "Jane Doe", "John Smith", "Jane Smith", "John Jones", "Jane Jones"];
    const titlesProfessional = ["Agent Ski", "Agent Bmx", "Agent Skate", "Agent Bike", "Agent Box", "Agent Ufc"];

    return (
        <>
            <div className="hero min-h-screen bg-primary text-black flex items-center justify-center">
                <div className="w-full max-w-3xl">
                    <h1 className="text-5xl font-bold m-4 text-white text-center">Our Team</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-full"
                        breakpoints={
                            {
                                "375": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 150
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 150
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 150
                                }
                            }
                        }
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="card glass bg-secondary shadow-xl w-64 h-auto p-4">
                                    <figure className="text-center">
                                        <Image
                                            src={image}
                                            alt={names[index]}
                                            width={300}
                                            height={300}
                                            priority={true}
                                            className="rounded-full w-36 h-36 mx-auto"
                                        />
                                    </figure>
                                    <div className="card-body text-center">
                                        <h1 className="card-title">
                                            <p>{names[index]}</p>
                                        </h1>
                                        <p>{titlesProfessional[index]}</p>
                                        <div className="card-actions flex justify-center mt-4">
                                            <div className="badge badge-outline mx-2">Sports</div>
                                            <div className="badge badge-outline mx-2">Services</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}