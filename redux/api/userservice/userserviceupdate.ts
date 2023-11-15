import { useSelector } from "react-redux";
import axios from "axios";

// Update user
const useUpdateUser = () => {
    const token = useSelector((state: any) => state.auth.token);

    const updateUser = async (
        id: Number,
        username: string,
        email: string,
        password: string,
        role: string
    ) => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_USER_URL}User/${id}`,
                {
                    id,
                    username,
                    email,
                    password,
                    role
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
            throw new Error("Error update user");
        }
    };

    return { updateUser };
};

export default useUpdateUser;