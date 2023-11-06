import Image from "next/image";
import Ski from "@/public/sports/ski.png";
import { GrUserManager } from "react-icons/gr";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiMoneygram } from "react-icons/si";

// HeroAbout Component
export default function HeroAbout() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Img Ski */}
        <Image
          className="w-max h-80 rounded-lg shadow-2xl cursor-pointer transform transition-transform hover:scale-125"
          src={Ski}
          alt="SkiImg"
          width={300}
          height={200}
          priority
        />

        {/*Card Services*/}
        <div className="card shadow-2xl bg-base-200 w-80 h-auto lg:w-auto">
          <div className="card-body">
            <h2 className="card-title justify-center font-bold">Services</h2>
            {/* Representation */}
            <div className="alert bg-accent">
              <GrUserManager className="text-2xl" />
              <span className="text-sm lg:texto-lg">Representation</span>
            </div>

            {/* Marketing */}
            <div className="alert bg-neutral">
              <AiFillThunderbolt className="text-2xl" />
              <span className="text-sm lg:texto-lg">Marketing</span>
            </div>

            {/* Financial */}
            <div className="alert bg-secondary">
              <SiMoneygram className="text-2xl" />
              <span className="text-sm lg:texto-lg">Financial</span>
            </div>
          </div>
        </div>

        {/* Text About us */}
        <div>
          <h1 className="text-5xl font-bold">About us</h1>
          <p className="py-6 text-xl text-left">
            Empowering athletes to achieve their full potential is at the heart
            of our business.
          </p>
          <p className="py-6 text-1xl">
            At Sport Agent, we pride ourselves on being your premier sports
            agency, dedicated to maximizing your athletic careers potential.
            With a passionate team of experienced professionals, we offer a
            comprehensive range of services to support athletes in achieving
            their dreams. As sports agents, we serve as your trusted advocates
            and advisors, guiding you through the complex landscape of the
            sports industry. We negotiate contracts, secure endorsements, and
            handle all the intricate details so that you can focus on what you
            do best: performing at your peak.
          </p>
          {/* Button Learn more*/}
          <div className="flex justify-center py-6">
            <button className="btn btn-outline btn-primary rounded-full w-80 h-16 justify-center text-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
