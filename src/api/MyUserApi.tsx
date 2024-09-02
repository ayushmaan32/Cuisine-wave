import { MyUserApiType } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyCurrentUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const MyCurrentUser = async (): Promise<MyUserApiType> => {
    const token = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error in Fetching using current user");
    }
    return response.json();
  };

  const {
    data: currentUser,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["fetchCurrentuser"],
    queryFn: MyCurrentUser,
  });

  if (error) {
    toast.error(error.toString());
  }

  return {
    currentUser,
    isError,
    isLoading,
  };
};

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
    error,
    isSuccess,
    isPending,
    reset,
    mutateAsync: UpateMyUser,
  } = useMutation({
    mutationFn: UpdateMyUser,
  });

  if (isSuccess) {
    toast.success("Updated Successfully");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }
  return {
    error,
    isSuccess,
    isPending,
    UpateMyUser,
    reset,
  };
};
