import React from "react";

import landingimg from "../assets/hero.png";

const LandingImage: React.FC = () => {
  return (
    <div>
      <img
        src={landingimg}
        alt="landingImg"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};
export default LandingImage;
