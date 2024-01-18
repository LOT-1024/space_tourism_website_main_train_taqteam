import React, { useRef } from "react";
import BackgroundImage from "/assets/destination/background-destination-desktop.jpg";
import { useGlobal } from "../context/GlobalContext";
import PlanetSelector from "../components/PlanetSelector";
import "./Destination.css";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";

const Destination: React.FC = () => {
  const { globalData, planet } = useGlobal();
  const selectedDestination = globalData.destinations.find(
    (destination) => destination.name.toLowerCase() === planet
  );
  const planetNames: string[] = ["moon", "mars", "europa", "titan"];
  const planetRefs = {
    moon: useRef<HTMLHeadingElement>(null),
    mars: useRef<HTMLHeadingElement>(null),
    europa: useRef<HTMLHeadingElement>(null),
    titan: useRef<HTMLHeadingElement>(null),
  };
  const planetImageRefs = {
    moonImage: useRef<HTMLImageElement>(null),
    marsImage: useRef<HTMLImageElement>(null),
    europaImage: useRef<HTMLImageElement>(null),
    titanImage: useRef<HTMLImageElement>(null),
  };
  const nodeRef = planetRefs[planet as keyof typeof planetRefs];
  const stringName = planet + "Image";
  const imageRef = planetImageRefs[stringName as keyof typeof planetImageRefs];

  return (
    <div
      className="w-full min-h-screen bg-cover text-white flex flex-col overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-full px-[10%] py-[7%] mt-auto flex flex-col gap-[64px] animate-summon">
        <div className="flex gap-[28px] items-center">
          <p className="font-barlowCondensed text-[28px] tracking-[4.725px] opacity-[0.25] text-white">
            01
          </p>
          <p className="font-barlowCondensed text-[28px] tracking-[4.725px] text-white">
            PICK YOUR DESTINATION
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <TransitionGroup className="w-[50%] relative bg-red-500">
            <CSSTransition
              key={planet}
              nodeRef={imageRef}
              timeout={500}
              classNames="planet-transition"
            >
              <img ref={imageRef} src={selectedDestination?.images.png} alt="" className="w-[80%] animate-rotation absolute -top-[200px]" />
            </CSSTransition>
          </TransitionGroup>
          <div className="flex flex-col gap-[37px] w-[39%]">
            <div className="flex gap-[36px]">
              {planetNames.map((name) => (
                <PlanetSelector key={name} planetName={name} />
              ))}
            </div>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={planet}
                nodeRef={nodeRef}
                addEndListener={(done: () => void): void => {
                  nodeRef.current?.addEventListener(
                    "transitionend",
                    done,
                    false
                  );
                }}
                classNames="my-transition"
              >
                <div ref={nodeRef} className="flex flex-col gap-[37px]">
                  <div className="flex flex-col">
                    <h1 className="font-bellefair text-[100px] text-white">
                      {selectedDestination
                        ? selectedDestination.name.toUpperCase()
                        : ""}
                    </h1>
                    <p className="font-barlow text-[18px] leading-[32px] text-textColor">
                      {selectedDestination
                        ? selectedDestination.description
                        : ""}
                    </p>
                  </div>
                  <div className="flex border-t-[1px] border-t-[#383B4B] pt-[28px] gap-[79px] mt-[17px]">
                    <div>
                      <p className="font-barlowCondensed text-[14px] tracking-[2.362px] text-textColor">
                        AVG. DISTANCE
                      </p>
                      <p className="text-white font-bellefair text-[28px]">
                        {selectedDestination
                          ? selectedDestination.distance.toUpperCase()
                          : ""}
                      </p>
                    </div>
                    <div>
                      <p className="font-barlowCondensed text-[14px] tracking-[2.362px] text-textColor">
                        EST. TRAVEL TIME
                      </p>
                      <p className="text-white font-bellefair text-[28px]">
                        {selectedDestination
                          ? selectedDestination.travel.toUpperCase()
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
