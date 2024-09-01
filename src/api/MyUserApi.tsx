import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type MyUserApi = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const CreateMyUser = async (user: MyUserApi) => {
    const accesstoken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create a new user");
    }
  };

  const {
    isError,
    isSuccess,
    mutateAsync: CreateUser,
  } = useMutation({
    mutationFn: CreateMyUser,
  });

  return {
    isError,
    isSuccess,
    CreateUser,
  };
};

type updateMyUserApi = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const UpdateMyUser = async (userData: updateMyUserApi) => {
    const accesstoken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to update a new user");
    }
  };

  const {
    isError,
    error,
    isSuccess,
    isPending,
    reset,
    mutateAsync: UpateMyUser,
  } = useMutation({
    mutationFn: UpdateMyUser,
  });

  return {
    isError,
    error,
    isSuccess,
    isPending,
    UpateMyUser,
    reset,
  };
};
