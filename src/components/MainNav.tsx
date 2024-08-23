import React from "react";
import { Button } from "./ui/button";

const MainNav: React.FC = () => {
  return (
    <Button
      variant="outline"
      className="hover:text-white hover:bg-yellow-500 text-yellow-500 font-bold"
    >
      Log in
    </Button>
  );
};
export default MainNav;
