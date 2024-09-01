import { useUpdateMyUser } from "@/api/MyUserApi";
import MyUserForm from "@/forms/my-user-form/MyUserForm";
import React from "react";

const UserProfilePage: React.FC = () => {
  const { isPending, UpateMyUser } = useUpdateMyUser();
  return <MyUserForm isLoading={isPending} onSave={UpateMyUser} />;
};
export default UserProfilePage;
