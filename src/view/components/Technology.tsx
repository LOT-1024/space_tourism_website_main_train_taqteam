import React, { useState } from "react";
import Data from "../../model/data/data.json";

const datas = Data.technology;

const Technology: React.FC = () => {
  const [currentData, setCurrentData] = useState(datas[0].name);
  // const [isSmallScreen, setIsSmallScreen] = useState(false)
  const selected = datas.find((element) => element.name === currentData);

  const onClickEvent = (value: string) => {
    setCurrentData(value);
  };

  // ## For Responsive

  // useEffect(() => {
  //     const mediaQuery = window.matchMedia('(max-width: 1439px)')
  //     setIsSmallScreen(mediaQuery.matches)

  //     const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches)

  //     mediaQuery.addEventListener('change', handler)
  //     return () => mediaQuery.removeEventListener('change', handler)
  // }, [])
  return (
    <div className="xl:w-dependWidthTechnology w-full text-white md:mt-[40px] xl:mb-[101px] xl:ml-[166.5px] xl:mt-[76px]">
      {/* Title */}
      <h1 className="text-center tracking-[2.7px] md:m-auto md:w-[691px] md:text-left md:text-[20px] md:tracking-[3.38px] xl:m-0 xl:text-left xl:text-[28px] xl:tracking-[4.72px]">
        <span className="mr-[16px] text-white/30">03</span>SPACE LAUNCH 101
      </h1>
      {/* Image Mobile and Tablet*/}
      <div className="flex w-full items-center justify-center xl:hidden">
        <img
          src={selected?.images.landscape}
          alt="technology image"
          className="mt-[32px] w-full md:mt-[60px]"
        />
      </div>
      <div className="xl:mt-[26px] xl:flex">
        {/* Button */}
        <div className="m-auto mt-[34px] flex w-full justify-center gap-[1rem] md:mt-[56px] md:text-[24px] xl:m-0 xl:h-full xl:w-fit xl:flex-col xl:gap-[32px] xl:self-center">
          {datas.map((data, i) => (
            <button
              className={`h-[40px] w-[40px] rounded-full border-2 border-solid md:h-[60px] md:w-[60px] xl:h-[80px] xl:w-[80px] xl:text-[32px] ${
                selected?.name === data.name
                  ? "border-white bg-white text-black"
                  : "border-white/30 hover:border-white"
              }`}
              key={i}
              onClick={() => onClickEvent(data.name)}
            >
              <h1 className="tracking-[1px] xl:tracking-[2px]">{i + 1}</h1>
            </button>
          ))}
        </div>
        {/* Name, Destination */}
        <div className="m-auto mt-[26px] w-[327px] text-center md:w-[458px] xl:m-auto xl:w-[470px] xl:self-center xl:text-left">
          <h2 className="text-[14px] tracking-[2.36px] text-white/70 md:text-[16px] md:tracking-[2.7px]">
            THE TERMINOLOGY…
          </h2>
          <h1 className="mt-[9px] text-[24px] md:text-[40px] xl:mt-[11px] xl:text-[56px]">
            {selected?.name.toUpperCase()}
          </h1>
          <p className="mb-[56px] mt-[16px] text-[15px] leading-[25px] text-white/70 md:mb-[97px] md:text-[16px] md:leading-[28px] xl:mb-0 xl:mt-[17px] xl:w-[444px] xl:text-[18px] xl:leading-[32px]">
            {selected?.description}
          </p>
        </div>
        {/* Image for Desktop */}
        <img
          src={selected?.images.portrait}
          alt="technology image"
          className="hidden w-[515px] xl:flex"
        />
      </div>
    </div>
  );
};

export default Technology;
