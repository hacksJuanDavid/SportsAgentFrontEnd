import { useSelector } from "react-redux";
import axios from "axios";

// Update contact
const useUpdateContact = () => {
    const token = useSelector((state: any) => state.auth.token);

    const updateContact = async (id: Number, username: string, email: string, message: string) => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_CONTACT_URL}Contact/${id}`,
                {
                    username,
                    email,
                    message
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            return response;
        } catch (error) {
            throw new Error("Error update contact");
        }
    };

    return { updateContact };
};

export default useUpdateContact;