import axios from "axios";

// Post new user
const useCreateNewContact = () => {

  const createContact = async (
    username: string,
    email: string,
    message: string
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SPORTS_AGENTS_CONTACT_URL}Contact`,
        {
          username,
          email,
          message,
        },
      );
      console.log(response);
      return response;
    } catch (error) {
      throw new Error("Error post new user");
    }
  };

  return { createContact };
};

export default useCreateNewContact;