import Image from "next/image";
import Ufc from "@/public/sports/ufc.png";

// Component : HeroFounderStory
export default function HeroFounderStory() {

    return (
        <>
            <div className="hero min-h-screen bg-secondary text-black">
                <div className="hero-content text-center flex flex-col items-center justify-center">
                    <div className="max-w-md flex flex-row">
                        <h1 className="text-5xl font-bold text-left">Our founder story in creating best service</h1>
                        <p className="text-xl m-1">
                            We offer a special service for all our athletes who wish to improve their professional
                            profile to achieve their goals like never before.
                        </p>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
                        <figure>
                            <Image
                                src={Ufc}
                                alt="UFC"
                                width={400}
                                height={400}
                                className="rounded-lg m-2 p-1 w-60 h-60 shadow-xl bg-secondary"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">Stats realse in service SportsAgent</h2>
                            <p>Click for more stats.</p>

                            <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-blue-300">
                                <div className="stat">
                                    <div className="stat-title text-primary">Views Pag</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title text-secondary">New Users</div>
                                    <div className="stat-value">4,200</div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title text-accent">New Registers</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
