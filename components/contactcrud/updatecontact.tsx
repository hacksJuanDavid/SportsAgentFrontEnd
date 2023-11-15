"use client";
// UpdateContact page
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import useUpdateContact from "@/redux/api/contactservice/contactserviceupdate";

export default function UpdateContact() {
    // Manage state
    const [id, setId] = useState(0);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Get router
    const router = useRouter();

    // Get contact from store redux
    const contactsRedux = useSelector((state: any) => state.listcontact.listContact);

    // Get contact from query
    const contactRedux = contactsRedux.find((contact: any) => contact.id === id);

    // Handle to contact page
    const handleContactPage = () => {
        router.push("/dashboard/contact");
    };

    // Update contact
    const { updateContact } = useUpdateContact();

    // Handle submit
    const handleSubmitUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Update contact
        await updateContact(id, userName, email, message);

        // Redirect
        router.push("/dashboard/contact");
    };

    // Set contact id
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const idUrl = urlParams.get("id");
        if (idUrl) {
            setId(Number(idUrl));
        }
    }, []);

    // Set contact name and email
    useEffect(() => {
        if (contactRedux) {
            setUserName(contactRedux.username || "");
            setEmail(contactRedux.email || "");
            setMessage(contactRedux.message || "");
        }
    }, [contactRedux]);

    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-start">
                    <div className="max-w-md">
                        <div className="max-w-md mx-auto m-4 p-6 bg-base-200 rounded shadow-xl">
                            <h1 className="text-3xl mb-4">Update Contact</h1>
                            <form onSubmit={handleSubmitUpdate}>
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
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <div className="mb-4">
                                    <label
                                        className="block  text-sm font-bold mb-2"
                                        htmlFor="Email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                        id="Email"
                                        type="Email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block  text-sm font-bold mb-2"
                                        htmlFor="Message"
                                    >
                                        Message
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                        id="Message"
                                        type="Message"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Update Contact
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
                </div >
            </div>
        </>
    );

}
