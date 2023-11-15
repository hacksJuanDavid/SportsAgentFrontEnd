"use client";
import Image from "next/image";
import PersonContact from "@/public/contact/person-contact.png";
import { RiMailSendFill } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Component: HeroContactUs
export default function HeroContactUs() {
    // State
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Router
    const router = useRouter();

    // Get values from form
    const handleUserName = (e: any) => {
        setUserName(e.target.value);
    };

    const handleEmail = (e: any) => {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(e.target.value)) {
            setError("Please enter a valid email");
            setSuccess("");
        } else {
            setEmail(e.target.value);
            setError("");
            setSuccess("Email is correct");
        }
    };

    const handleMessage = (e: any) => {
        setMessage(e.target.value);
    };

    // Handle submit form
    const handleSubmitContact = async (e: any) => {
        e.preventDefault();

        // Validate data from form not empty
        if (!userName || !email || !message) {
            setError("Please fill in all fields");
            return;
        }

        // Verifying the JSON data
        const jsonData = JSON.stringify({ userName, email, message });

        // Send data to backend
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_CONTACT_URL}Contact`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonData,
            }
        );


        // Handle success
        if (res.ok) {
            // Redirect to home page
            router.push("/");

        } else {
            // Handle error
            setError("Not send message failed");
        }

    };

    return (
        <>
            <div className="hero min-h-screen bg-primary text-black">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-full overflow-hidden">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold m-2 text-center">Contact service</h1>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto lg:mx-0">
                            <figure>
                                <Image
                                    src={PersonContact}
                                    alt="person-contact"
                                    width={700}
                                    height={700}
                                    priority={true}
                                    className="rounded-xl w-60 h-auto lg:w-96 lg:h-96"
                                />
                            </figure>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto lg:mx-0">
                            <div className="divider lg:divider-horizontal">
                                <RiMailSendFill className="text-6xl text-center lg:ml-10" />
                            </div>
                        </div>
                    </div>

                    <div className="card glass flex-shrink-0 w-full max-w-full lg:max-w-sm shadow-2xl bg-secondary">
                        <form className="card-body">
                            <h1 className="mb-4 text-2xl font-bold card-title">Get in touch 👋🏻</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required
                                    onChange={handleUserName}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                    onChange={handleEmail}
                                />
                                {success && success.includes("Email") && (
                                    <p className="text-success mt-2 font-bold">{success}</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">How can we help?</span>
                                </label>
                                <input
                                    type="message"
                                    placeholder="message"
                                    className="input input-bordered input-lg w-full h-40 max-w-xs"
                                    required
                                    onChange={handleMessage}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={handleSubmitContact}>Send my message</button>
                            </div>
                        </form>
                        {/* Error */}
                        {error && (
                            <div className="alert alert-error">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">{error}</span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
