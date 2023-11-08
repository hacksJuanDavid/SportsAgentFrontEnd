import Image from "next/image";
import BenefitsSport from "@/public/benefits/benefits-sport.png";
import { GiSharpSmile } from "react-icons/gi";
import { BiSolidBusiness } from "react-icons/bi";
import { FaEthernet } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

// Componente: HeroFeaturesBenefits
export default function HeroFeaturesBenefits() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 text-black">
                <div className="hero-content text-center grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
                    <div className="max-w-md text-center md:text-left">
                        <h1 className="text-5xl font-bold">Feature benefits</h1>
                        <p className="py-6">
                            By increasing your opportunities for work, business,
                            undertaking new skills and improving your sporting life.
                        </p>

                        <div className="collapse bg-base-200 m-2">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-neutral text-black-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                < GiSharpSmile className="text-4xl" />
                                New skills and improving your sporting life.
                                <BsChevronDown className="text-4xl text-end" />
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <div className="stats shadow">
                                    <div className="stat">
                                        <div className="stat-figure text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="stat-title text-black">Total Likes</div>
                                        <div className="stat-value text-red-600">25.6K</div>
                                        <div className="stat-desc ">21% more than last month</div>
                                    </div>
                                </div>
                                <a href="https://www.youtube.com/watch?v=c0y4Ntf_nC0" target="_blank" rel="noreferrer">
                                    <p className="text-white btn btn-neutral rounded-full m-2">Link to redirect video</p>
                                </a>
                            </div>
                        </div>

                        <div className="collapse bg-base-200 m-2">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-accent text-black-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                < BiSolidBusiness className="text-4xl" />
                                By increasing your opportunities for work, business,
                                undertaking new skills and improving your sporting life.
                                <BsChevronDown className="text-4xl text-end" />
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <div className="stats shadow">
                                    <div className="stat">
                                        <div className="stat-figure text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="stat-title text-black">Total Likes</div>
                                        <div className="stat-value text-red-600">25.6K</div>
                                        <div className="stat-desc ">21% more than last month</div>
                                    </div>
                                </div>
                                <a href="https://www.youtube.com/watch?v=woR9b01N6mQ" target="_blank" rel="noreferrer">
                                    <p className="text-white btn btn-neutral rounded-full m-2">Link to redirect video</p>
                                </a>
                            </div>
                        </div>

                        <div className="collapse bg-base-200 m-2">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-secondary text-black-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                < FaEthernet className="text-4xl" />
                                Connect with other athletes and coaches.
                                <BsChevronDown className="text-4xl text-end" />
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <div className="stats shadow">
                                    <div className="stat">
                                        <div className="stat-figure text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="stat-title text-black">Total Likes</div>
                                        <div className="stat-value text-red-600">25.6K</div>
                                        <div className="stat-desc ">21% more than last month</div>
                                    </div>
                                </div>
                                <a href="https://www.youtube.com/watch?v=a229VtbJYEk" target="_blank" rel="noreferrer">
                                    <p className="text-white btn btn-neutral rounded-full m-2">Link to redirect video</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral rounded-full w-full h-full m-10 flex items-center justify-center">
                        <div className="mockup-phone border-primary m-5 max-w-xs md:max-w-full">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1">
                                    <Image
                                        src={BenefitsSport}
                                        alt="BenefitsSports"
                                        width={1280}
                                        height={720}
                                        className="w-full h-full bg-black"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
