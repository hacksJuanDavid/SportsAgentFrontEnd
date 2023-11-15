import { useSelector } from "react-redux";
import axios from "axios";

// Post new user
const useCreateNewUser = () => {
    const token = useSelector((state: any) => state.auth.token);

    const createUser = async (
        username: string,
        email: string,
        password: string,
        role: string
    ) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_USER_URL}User`,
                {
                    username,
                    email,
                    password,
                    role,
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
            throw new Error("Error post new user");
        }
    };

    return { createUser };
};

export default useCreateNewUser;