import React from "react";
import { useGlobal } from "../context/GlobalContext";

type planetSelectorType = {
  planetName: string;
};

const PlanetSelector: React.FC<planetSelectorType> = ({ planetName }) => {
  const {planet, setPlanet} = useGlobal();

  function selectPlanetHandler(): void {
    setPlanet(planetName);
  }

  return (
    <button className={`text-[16px]  font-barlowCondensed tracking-[2.7px] border-b-[3px] pb-[12px] ${planet === planetName ? "text-white border-b-white" : "text-textColor hover:border-b-white/50 border-b-transparent"}`} onClick={selectPlanetHandler}>
      {planetName.toUpperCase()}
    </button>
  );
};

export default PlanetSelector;
