import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UserMenu from "./UserMenu";

const MainNav: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex items-center">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant="outline"
          className="hover:text-white hover:bg-yellow-500 text-yellow-500 font-bold"
          onClick={async () => await loginWithRedirect()}
        >
          Log in
        </Button>
      )}
    </span>
  );
};
export default MainNav;
