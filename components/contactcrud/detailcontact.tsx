"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// DetailContact page
export default function DetailContact() {
    // Manage state
    const [id, setId] = useState(0);

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

    // Set contact id
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const idUrl = urlParams.get("id");
        if (idUrl) {
            setId(Number(idUrl));
        }
    }, []);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen py-2">
                <div className="w-full sm:max-w-2xl bg-base-200 shadow-md p-8 sm:p-12 rounded-md">
                    <h1 className="text-3xl font-bold text-center mb-8">Details Contact</h1>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-neutral">
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Message</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={contactRedux?.id} className="">
                                    <td className="border px-4 py-2">{contactRedux?.id}</td>
                                    <td className="border px-4 py-2">{contactRedux?.name}</td>
                                    <td className="border px-4 py-2">{contactRedux?.email}</td>
                                    <td className="border px-4 py-2">{contactRedux?.message}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            className="bg-green-950 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleContactPage()}
                                        >
                                            Back
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    );


}