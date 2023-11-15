"use client";
// Delete contact page
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useDeleteContact from "@/redux/api/contactservice/contactservicedelete";

// DeleteContact page
export default function DeleteContact() {
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

    // Delete contact
    const { deleteContact } = useDeleteContact();

    // Handle submit
    const handleSubmitDelete = async () => {
        // Delete contact
        await deleteContact(id);

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

    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex items-center justify-center">
                    <div className="card shadow-xl p-8 bg-base-200">
                        <h2 className="card-title text-2xl mb-4">
                            Are you sure you want to delete the contact?
                        </h2>
                        <p className="text-2xl text-center text-red-500">
                            This action cannot be undone.
                        </p>
                        <div className="justify-center card-actions mt-6">
                            <button
                                className="btn bg-red-500 rounded m-1 p-1 w-20 text-white"
                                onClick={() => handleSubmitDelete()}
                            >
                                Delete
                            </button>
                            <button
                                className="btn bg-green-500 rounded m-1 p-1 w-20 text-white"
                                onClick={() => handleContactPage()}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}