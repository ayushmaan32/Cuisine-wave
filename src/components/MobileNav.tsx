import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
// import { Link } from "react-router-dom";

const MobileNav: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
              </span>
            ) : (
              <span> Welcome to Cusine Wave</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-3">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                className="flex-1 font-bold bg-orange-500"
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
