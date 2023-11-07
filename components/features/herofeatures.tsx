import BmxStreet from "@/public/sports/bmxstreet.png"
import BmxPark from "@/public/sports/bmxpark.png"
import SkateBoardingStreet from "@/public/sports/skateboardingstreet.png"
import SkateBoardingPark from "@/public/sports/skateboardingpark.png"
import Image from "next/image"
//Component HeroFeatures
export default function HeroFeatures() {

    return (
        <>
            <div className="hero min-h-screen bg-neutral text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold m-4">Features</h1>


                        <div className="grid grid-cols-2 gap-4">
                            <div className="card w-auto bg-primary shadow-xl image-full m-2 p-1">
                                <figure>
                                    <Image
                                        src={BmxStreet}
                                        alt="BmxStreet"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Power Skills</h2>
                                    <p className=" text-xs lg:text-xl">
                                        Essential competencies enabling effective.
                                    </p>
                                </div>
                            </div>

                            <div className="card w-auto bg-secondary shadow-xl image-full m-2 p-1">
                                <figure>
                                    <Image
                                        src={SkateBoardingStreet}
                                        alt="SkateBoardingStreet"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Manage</h2>
                                    <p className=" text-xs lg:text-xl">
                                        A leader overseeing teams
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 card w-auto bg-accent shadow-xl image-full m-2 p-1">
                                <figure>
                                    <Image
                                        src={SkateBoardingPark}
                                        alt="SkateBoardingPark"
                                        width={500}
                                        height={300}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Routines</h2>
                                    <p className=" text-xs lg:text-xl">
                                        Consistent practices and habits enhancing productivity,
                                        mental well-being, and overall efficiency,
                                        crucial for maintaining work-life balance and focus.
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 card w-auto bg-base-100 shadow-xl image-full m-2 p-1">
                                <figure>
                                    <Image
                                        src={BmxPark}
                                        alt="BmxPark"
                                        width={500}
                                        height={200}
                                        priority
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Certificates</h2>
                                    <p className=" text-xs lg:text-xl">
                                        Official documents verifying completion
                                        of specific courses or training,
                                        validating expertise and proficiency
                                        in specialized areas or skills.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
} 