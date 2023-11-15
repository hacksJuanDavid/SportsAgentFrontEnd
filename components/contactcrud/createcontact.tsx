"use client";
// Create Contact page
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import useCreateNewContact from "@/redux/api/contactservice/contactservicecreate";

export default function CreateContact() {
    // Manage state
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Get router
    const router = useRouter();

    // Handle to contact page
    const handleContactPage = () => {
        router.push("/dashboard/contact");
    };

    // Create contact
    const { createContact } = useCreateNewContact();

    // Handle submit to create contact
    const handleSubmitCreate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create contact
        await createContact(username, email, message);

        // Redirect
        router.push("/dashboard/contact");
    };

    // Return
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-start">
                    <div className="max-w-md">
                        <div className="max-w-md mx-auto m-4 p-6 bg-base-200 rounded shadow-xl">
                            <h1 className="text-3xl mb-4">Create Contact</h1>
                            <form onSubmit={handleSubmitCreate}>
                                <div className="mb-4">
                                    <label
                                        className="blocktext-sm font-bold mb-2"
                                        htmlFor="UserName"
                                    >
                                        UserName
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="UserName"
                                        type="text"
                                        placeholder="UserName"
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="blocktext-sm font-bold mb-2"
                                        htmlFor="Email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="Email"
                                        type="text"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="blocktext-sm font-bold mb-2"
                                        htmlFor="Message"
                                    >
                                        Message
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="Message"
                                        type="text"
                                        placeholder="Message"
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Create Contact
                                    </button>
                                    <button
                                        className="bg-green-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handleContactPage}
                                    >
                                        Back
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}