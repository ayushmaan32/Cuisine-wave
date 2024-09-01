import React from "react";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

const LoadingButton: React.FC = () => {
  return (
    <Button disabled>
      {/* <Ellipsis className="animate-ping" /> */}
      <Loader className="animate-spin scroll-smooth" />
      Loading
    </Button>
  );
};
export default LoadingButton;
