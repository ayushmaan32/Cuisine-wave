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
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNav: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>Welcome to Cuisine Wave</SheetTitle>
          <Separator />
          <SheetDescription className="flex justify-center">
            <div className="space-y-2    ">
              <Button
                className="flex-1  font-bold bg-orange-500"
                onClick={async () => await loginWithRedirect()}
              >
                Log in
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
