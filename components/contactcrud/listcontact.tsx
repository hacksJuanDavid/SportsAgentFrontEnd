"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setListContact } from "@/redux/features/listcontact";
import ErrorAuthorization from "../errors/errorauthorization";
import useGetAllContacts from "@/redux/api/contactservice/contactservicelist";

export default function ListContact() {
    // Manage state error authorization
    const [errorId, setErrorId] = useState("");
    const [error, setError] = useState("");

    // Get error authorization from store redux
    const errorRedux = useSelector(
        (state: any) => state.authorization
    );

    // Get contacts from store redux
    const contactsRedux = useSelector((state: any) => state.listcontact.listContact);

    // Get router
    const router = useRouter();

    // Get dispatch
    const dispatch = useDispatch();

    // Get all contacts
    const getAllContacts = useGetAllContacts();

    // Set contacts from getAllContacts
    useEffect(() => {
        dispatch(setListContact(getAllContacts));
    }, [dispatch, getAllContacts]);

    // Set error authorization
    useEffect(() => {
        if (errorRedux && errorRedux.errorId && errorRedux.error) {
            setErrorId(errorRedux.errorId);
            setError(errorRedux.error);
        }
    }, [errorRedux]);

    // Handle error authorization
    if (errorRedux && errorRedux.errorId && errorRedux.error) {
        return (
            <div>
                <ErrorAuthorization id={errorId} error={error} />
            </div>
        );
    }

    // Handle Create
    const handleCreate = () => {
        // Redirect to create contact
        router.push("/dashboard/contact/create");
    };

    // Handle Update
    const handleUpdate = (contact: any) => {
        // Redirect to update contact
        router.push(`/dashboard/contact/update?id=${contact.id}`);
    };

    // Handle Delete
    const handleDelete = (contact: any) => {
        // Redirect to delete contact
        router.push(`/dashboard/contact/delete?id=${contact.id}`);
    };

    // Handle Details
    const handleDetails = (contact: any) => {
        // Redirect to details contact
        router.push(`/dashboard/contact/detail?id=${contact.id}`);
    };

    return (
        <>
            <h1 className="text-5xl font-bold text-center m-2 p-1">List Contact</h1>
            <div className="card shadow-lg compact side bg-base-100">
                <div className="card-body overflow-x-auto">
                    <button
                        className="btn btn-accent rounded m-1 p-1 w-20"
                        onClick={() => handleCreate()}
                    >
                        Create
                    </button>
                    <table className="table">
                        <thead>
                            <tr className="bg-neutral">
                                <th>ID</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactsRedux.map((contact: any) => (
                                <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.username}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary rounded m-1 p-1 w-20"
                                            onClick={() => handleUpdate(contact)}
                                        >
                                            Update
                                        </button>

                                        <button
                                            className="btn btn-accent rounded m-1 p-1 w-20"
                                            onClick={() => handleDetails(contact)}
                                        >
                                            Details
                                        </button>
                                        <button
                                            className="btn btn-secondary rounded m-1 p-1 w-20"
                                            onClick={() => handleDelete(contact)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}