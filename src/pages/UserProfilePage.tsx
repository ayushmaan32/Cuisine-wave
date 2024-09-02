import { useGetMyCurrentUser, useUpdateMyUser } from "@/api/MyUserApi";
import MyUserForm from "@/forms/my-user-form/MyUserForm";
import React from "react";

const UserProfilePage: React.FC = () => {
  const { currentUser, isLoading } = useGetMyCurrentUser();
  const { isPending, UpateMyUser } = useUpdateMyUser();

  console.log(currentUser);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (!currentUser) {
    return <span>Unable to Load User Profile</span>;
  }
  return (
    <MyUserForm
      currentUser={currentUser}
      isLoading={isPending}
      onSave={UpateMyUser}
    />
  );
};
export default UserProfilePage;
