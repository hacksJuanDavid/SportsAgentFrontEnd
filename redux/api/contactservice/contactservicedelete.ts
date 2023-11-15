import { useSelector } from "react-redux";
import axios from "axios";

// Delete contact
const useDeleteContact = () => {
    const token = useSelector((state: any) => state.auth.token);

    const deleteContact = async (id: Number) => {
        try {
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_CONTACT_URL}Contact/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            return response;
        } catch (error) {
            throw new Error("Error delete contact");
        }
    };

    return { deleteContact };
};

export default useDeleteContact;