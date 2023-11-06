"use client";
import { useState } from "react";
import Image from "next/image";

// Component CarouselHome
export default function CarouselHome() {
    // Arrays with items carousel
    const images = [
        "/sports/bmxstreet.png",
        "/sports/bmxpark.png",
        "/sports/skateboardingstreet.png",
        "/sports/skateboardingpark.png",
        "/sports/ski.png",
        "/sports/boxing.png",
    ];

    const titles = ["BMX Street", "BMX Park", "Skateboarding Street", "Skateboarding Park", "Skiing", "Boxing"];
    const descriptions = [
        "Enjoy the thrill of BMX riding in the streets.",
        "Experience the excitement of BMX riding in the park.",
        "Explore the art of skateboarding in urban streets.",
        "Discover the fun of skateboarding in a local park.",
        "Hit the slopes and enjoy the thrill of skiing.",
        "Get in the ring and experience the intensity of boxing.",
    ];

    // Manage states
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ratings, setRatings] = useState(Array(images.length).fill(3));

    // Back item in carousel
    const previousItem = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    // Next item in carousel
    const nextItem = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    // Function rating change
    const handleRatingChange = (index: any, rating: any) => {
        const newRatings = [...ratings];
        newRatings[index] = rating;
        setRatings(newRatings);
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-100 text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="carousel carousel-center max-w-md p-4 bg-secondary rounded-box">
                        {/* Images next or back */}
                        {images.map((image, index) => (
                            <div key={index} className="carousel-item" style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                <Image src={image} width={500} height={500} priority className="rounded-box w-96 h-96" alt={`slide-${index}`} />
                                <h3 className="text-xl font-bold mt-4">{titles[index]}</h3>
                                <p>{descriptions[index]}</p>

                                {/* Rating selection */}
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <input
                                            key={value}
                                            type="radio"
                                            name={`rating-${index}`}
                                            className="mask mask-star-2 bg-yellow-400"
                                            checked={ratings[index] === value}
                                            onChange={() => handleRatingChange(index, value)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Blogs</h1>
                        <p className="py-6">
                            Welcome to the exciting world of sports!
                        </p>
                        <div className="join grid grid-cols-2 ">
                            <button onClick={previousItem} className="join-item btn btn-outline text-black">Previous page</button>
                            <button onClick={nextItem} className="join-item btn btn-outline text-black">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}