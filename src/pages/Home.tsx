import React from "react";
import BackgroundImage from "/assets/home/background-home-desktop.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover text-white flex flex-col overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="p-[10%] flex items-end justify-between mt-auto gap-[20%] w-full select-none animate-summon">
        <div className="flex flex-col gap-[10px] flex-1">
          <p className="text-[28px] font-barlowCondensed text-textColor tracking-[4.725px]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-[150px] font-bellefair">SPACE</h1>
          <p className="text-[18px] font-barlow leading-[32px] text-textColor">
            Let's face it; if you want to go to space, you might as well
            ganuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[60%] flex justify-center relative group">
            <Link to='/destination' className="text-[32px] text-[#0B0D17] font-bellefair tracking-[2px] bg-white w-full aspect-square rounded-full z-[10] select-none flex justify-center items-center">
              EXPLORE
            </Link>
            <div className="absolute bg-white/10 w-full group-hover:scale-[1.6] aspect-square rounded-full -top-0 transition-all ease-in-out duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
