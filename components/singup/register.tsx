"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';
import SportAgentLogo from "@/public/logo/sports-agents-logo.png";
import BmxStreet from "@/public/sports/boxing.png";

// Component register
export default function Register() {
    // Handle values from form
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Router
    const router = useRouter();

    // Get values from form
    const handleUsername = (e: any) => {
        const re = /^[a-zA-Z0-9]+$/;
        if (!re.test(e.target.value)) {
            setError("Username must contain only letters and numbers");
            setSuccess("");
        } else {
            setUserName(e.target.value);
            setError("");
            setSuccess("Username is correct");
        }
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

    const handlePassword = (e: any) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (!re.test(e.target.value)) {
            setError("Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number");
            setSuccess("");
        } else {
            setPassword(e.target.value);
            setError("");
            setSuccess("Password is correct");
        }
    };

    // Handle submit form
    const handleSubmitRegister = async (e: any) => {
        e.preventDefault();

        // Validate data from form not empty
        if (!userName || !email || !password) {
            setError("Please fill in all the fields");
            return;
        }

        // Verifying the JSON data
        const jsonData = JSON.stringify({ userName, email, password });

        // Send data to backend
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_USER_URL}Auth/register`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonData,
            }
        );

        // Get response from backend
        const data = await res.json();

        console.log(data);

        // Handle error
        if (data.error) {
            setError(data.message);
            return;
        }

        // Handle success
        if (res.ok) {
            // Redirect to home page
            router.push("/");
        } else {
            // Handle error
            setError(data.message || 'Registration failed');
        }

    };

    return (
        <>
            <div className="hero min-h-screen bg-primary text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left shadow-xl rounded-full m-2 p-2 bg-base-100">
                        <Image
                            className="w-auto h-auto rounded-full shadow-2xl"
                            src={BmxStreet}
                            alt="BmxStreet"
                            width={400}
                            height={500}
                            priority
                        />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="mb-4 text-2xl font-bold card-title">Welcome to join 🤠</h1>
                            <h3 className="mb-4 text-sm font-bold card-title">Resgister get a account</h3>
                            <div className="form-control">
                                {/* Username */}
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="username"
                                    className="input input-bordered"
                                    required
                                    onChange={handleUsername}
                                />
                                {success && success.includes("Username") && (
                                    <p className="text-success mt-2 font-bold">{success}</p>
                                )}

                                {/* Email */}
                                <label className="label">
                                    <span className="label-text mt-2 font-bold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                    onChange={handleEmail}
                                />
                                {success && success.includes("Email") && (
                                    <p className="text-success">{success}</p>
                                )}

                                {/* Password */}
                                <label className="label">
                                    <span className="label-text mt-2 font-bold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                    onChange={handlePassword}
                                />
                                {success && success.includes("Password") && (
                                    <p className="text-success">{success}</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={handleSubmitRegister}>Register</button>
                            </div>
                            {/*You have a acount in link */}
                            <div className="flex items-center justify-center mt-6">
                                <label className="label-text-alt">You have an account?</label>
                                <a href="/login" className="btn btn-sm btn-secondary btn-square ml-2 w-32 " >Login</a>
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

                    <div className="text-center lg:text-left shadow-xl rounded-full m-2 p-2 bg-base-100">
                        <Image
                            className="w-auto h-auto rounded-full shadow-2xl"
                            src={SportAgentLogo}
                            alt="SportAgentLogo"
                            width={400}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
