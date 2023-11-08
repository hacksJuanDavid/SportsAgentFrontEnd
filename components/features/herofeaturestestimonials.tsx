"use client";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Component : HeroFeaturesTestimonials
export default function HeroFeaturesTestimonials() {
    // Array testimonials
    const testimonials = [
        {
            "name": "John Doe",
            "title": "CEO",
            "image": "/people/person1.png",
            "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore."
        },
        {
            "name": "Jane Doe",
            "title": "CTO",
            "image": "/people/person2.png",
            "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore."
        },
        {
            "name": "John Smith",
            "title": "CFO",
            "image": "/people/person3.png",
            "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore."
        },
        {
            "name": "Jane Smith",
            "title": "COO",
            "image": "/people/person4.png",
            "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore."
        },
        {
            "name": "John Jones",
            "title": "CIO",
            "image": "/people/person5.png",
            "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore."
        },
        {
            "name": "Jane Jones",
            "title": "CMO ",
            "image": "/people/person6.png",
            "testimonial": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore."
        }
    ];


    return (
        <>
           <div className="hero min-h-screen bg-accent text-black flex items-center justify-center">
                <div className="w-full max-w-3xl">
                    <h1 className="text-5xl font-bold m-4 text-center">Testimonials</h1>
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
                        {testimonials.map((testimonials, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="card bg-base-100 shadow-xl w-64 h-auto p-4">
                                    <figure className="text-center">
                                        <Image
                                            src={testimonials.image}
                                            alt={testimonials.name}
                                            width={300}
                                            height={300}
                                            priority={true}
                                            className="rounded-full w-36 h-36 mx-auto"
                                        />
                                    </figure>
                                    <div className="card-body text-center">
                                        <h1 className="card-title">
                                            <p>{testimonials.name}</p>
                                        </h1>
                                        <p>{testimonials.title}</p>
                                        <p>{testimonials.testimonial}</p>
                                        <div className="card-actions flex justify-center mt-4">
                                            <div className="badge badge-outline mx-2">Sports</div>
                                            <div className="badge badge-outline mx-2">Services</div>
                                            <div className="badge badge-outline mx-2">Client</div>
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