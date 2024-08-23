import Header from "@/components/Header";
import LandingImage from "@/components/LandingImage";

import React from "react";

type layoutsProps = {
  children: React.ReactNode;
};

const Layouts: React.FC<layoutsProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LandingImage />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};
export default Layouts;
