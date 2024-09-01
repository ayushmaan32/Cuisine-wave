import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingImage from "@/components/LandingImage";

import React from "react";

type layoutsProps = {
  children: React.ReactNode;
  landigImage?: boolean;
};

const Layouts: React.FC<layoutsProps> = ({ children, landigImage = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {landigImage && <LandingImage />}

      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};
export default Layouts;
