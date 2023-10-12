"use client";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

// Footer Component
export default function Footer() {
  // Language
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Handle Language Change
  const handleLanguageChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      {/* Footer over */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        {/* Newsletter */}
        <form>
          <header className="footer-title">Suscribe to our newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              {/* Email Icon */}
              <AiOutlineMail className="absolute ml-2 mt-4 text-lg text-primary" />
              <input
                type="text"
                placeholder="   username@site.com"
                className="input input-bordered rounded-full w-full pr-16"
              />
              <button className="btn btn-primary rounded-full absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>

        {/* Services */}
        <nav>
          <header className="footer-title text-primary">Services</header>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Careers</a>
        </nav>

        {/* Company */}
        <nav>
          <header className="footer-title text-primary">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Pricing</a>
        </nav>

        {/* Legal */}
        <nav>
          <header className="footer-title text-primary">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      {/* Footer under */}
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        {/* Language */}
        <nav className="md:place-self-start">
          <select
            className="select select-primary w-full max-w-xs"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="" disabled>
              Select language
            </option>
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
          </select>
        </nav>

        {/* By creation */}
        <nav className="items-center grid-flow-col md:place-self-center">
          <MdOutlineSportsGymnastics className="text-2xl text-primary" />
          <p>
            By HacksJuanDavid. <br />
            Providing reliable tech since 2023
          </p>
        </nav>

        {/* Social Media Icons */}
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <BsTwitter className="text-2xl text-cyan-500" />
            </a>
            <a>
              <BsFacebook className="text-2xl text-blue-700" />
            </a>
            <a>
              <BsLinkedin className="text-2xl text-blue-800" />
            </a>
            <a>
              <BsInstagram className="text-2xl text-orange-500" />
            </a>
            <a>
              <BsYoutube className="text-2xl text-red-600" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
