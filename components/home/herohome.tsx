import Image from "next/image";
import BmxStreet from "@/public/sports/bmxstreet.png";
import BmxPark from "@/public/sports/bmxpark.png";
import SkateBoardingStreet from "@/public/sports/skateboardingstreet.png";
import SkateBoardingPark from "@/public/sports/skateboardingpark.png";
import Boxing from "@/public/sports/boxing.png";
import Ufc from "@/public/sports/ufc.png";

// HeroHome Componet
export default function HeroHome() {
  return (
    <div className="hero min-h-screen bg-primary relative">
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <div>
          <p className="py-6 text-xl text-center">Exotic esse deserunt magna</p>
          <h1 className="text-4xl lg:text-8xl text-center font-bold py-6">
            Sports Agent
          </h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {/* Img BmxStreet */}
        <div
          className="circle absolute w-20 h-20 lg:w-44 lg:h-44 bg-white rounded-full"
          style={{ top: "20%", left: "10%" }}
        >
          <Image
            className="w-20 h-20 lg:w-44 lg:h-44 rounded-full cursor-pointer transform transition-transform hover:scale-125"
            src={BmxStreet}
            alt="BmxStreetImg"
            width={400}
            height={400}
          />
        </div>

        {/* Img BmxPark */}
        <div
          className="circle absolute w-20 h-20 lg:w-60 lg:h-60 bg-white rounded-full"
          style={{ top: "10%", right: "35%" }}
        >
          <Image
            className="w-20 h-20 lg:w-60 lg:h-60 rounded-full cursor-pointer transform transition-transform hover:scale-125"
            src={BmxPark}
            alt="BmxParkImg"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* Img SkateBoardingStreet */}
        <div
          className="circle absolute w-40 h-40 bg-white rounded-full"
          style={{ top: "69%", right: "55%" }}
        >
          <Image
            className="w-40 h-40 rounded-full cursor-pointer transform transition-transform hover:scale-125"
            src={SkateBoardingStreet}
            alt="SkateBoardingStreetImg"
            width={400}
            height={400}
          />
        </div>

        {/* Img SkateBoardingPark */}
        <div
          className="circle absolute w-20 h-20 lg:w-40 lg:h-40 bg-white rounded-full"
          style={{ top: "77%", left: "70%" }}
        >
          <Image
            className="w-20 h-20 lg:w-40 lg:h-40 rounded-full cursor-pointer transform transition-transform hover:scale-125"
            src={SkateBoardingPark}
            alt="SkateBoardingParkImg"
            width={400}
            height={400}
          />
        </div>

        {/* Img Boxing */}
        <div
          className="circle absolute w-16 h-16 lg:w-32 lg:h-32 bg-white rounded-full"
          style={{ top: "20%", left: "78%" }}
        >
          <Image
            className="w-16 h-16 lg:w-32 lg:h-32 rounded-full cursor-pointer transform transition-transform hover:scale-125"
            src={Boxing}
            alt="BoxingImg"
            width={1400}
            height={800}
          />
        </div>

        {/* Img Ufc */}
        <div
          className="circle absolute w-20 h-20 lg:w-30 lg:h-30 bg-white rounded-full"
          style={{ top: "80%", right: "32%" }}
        >
          <Image
            className="w-20 h-20 lg:w-30 lg:h-30 rounded-full cursor-pointer transform transition-transform hover:scale-125"
            src={Ufc}
            alt="UfcImg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
