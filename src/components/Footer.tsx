import React from "react";

// type FooterProps = {

// };

const Footer: React.FC = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <span className="text-3xl font-bold tracking-tighter text-white">
          Cuisine Wave
        </span>
        <span className="font-bold text-white tracking-tighter flex gap-4">
          <span>Privacy policy</span>
          <span>Terms of service</span>
        </span>
      </div>
    </div>
  );
};
export default Footer;
