import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="outline"
      className="hover:text-white hover:bg-yellow-500 text-yellow-500 font-bold"
      onClick={async () => await loginWithRedirect()}
    >
      Log in
    </Button>
  );
};
export default MainNav;
