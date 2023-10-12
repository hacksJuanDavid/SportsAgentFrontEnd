import Image from "next/image";
import LogoSportsAgent from "@/public/logo/sports-agents-logo.png";
import { LuListMinus } from "react-icons/lu";

// Navbar Component
export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 mb-20">
        {/* Menu Mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <LuListMinus className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <a className="text-black text-2xl font-bold" href="/">
            <Image
              className="rounded-full w-20 h-16 lg:w-40 lg:h-20 p-1 m-1 cursor-pointer transform transition-transform hover:scale-125"
              src={LogoSportsAgent}
              alt="LogoSportsAgentLogo"
              width={160}
              height={64}
            />
          </a>
        </div>

        {/* Menu Desktop Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 xl:text-2xl">
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Help Center</a>
            </li>
          </ul>
        </div>

        {/* Menu Desktop Right */}
        <div className="navbar-end">
          <a className="btn btn-ghost rounded-full text-primary w-20 h-10 lg:w-40 lg:h-16">
            Login
          </a>
          <a className="btn btn-primary rounded-full w-20 h-10 lg:w-40 lg:h-16">
            Try for free
          </a>
        </div>
      </div>
    </>
  );
}
