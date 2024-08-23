import React from "react";
import mobileImg from "../assets/mobile.png";
import appDownloadImg from "../assets/mobileimg.png";

// type HomepageProps = {

// };

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col rounded-lg shadow-md bg-white py-8 text-center gap-5 -mt-20 ">
        <h1 className="font-bold text-orange-600 text-5xl tracking-tight">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl text-orange-300">
          Food is just a click away
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={mobileImg} alt="mobileImg" />
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <span className="font-bold tracking-tighter text-3xl">
            Order takeway even faster
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
