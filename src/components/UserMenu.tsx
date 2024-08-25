import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

// type UserMenuProps = {

// };

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 gap-2 font-bold hover:text-orange-500 focus:outline-none">
        <CircleUserIcon className="font-bold text-orange-500" />
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="focus:outline-none">
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-orange-500 hover:bg-orange-600"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserMenu;
