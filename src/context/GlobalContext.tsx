import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import Data from "../utils/data.json";

interface GlobalProviderProps {
  children: ReactNode
}

type destinationType = {
  name: string,
  images: {
    png: string,
    webp: string,
  },
  description: string,
  distance: string,
  travel: string,
}

type crewType ={
  name: string,
  images: {
    png: string,
    webp: string,
  },
  role: string,
  bio: string,
}

type techType = {
  name: string,
  images: {
    portrait: string,
    landscape: string,
  },
  description: string,
}

type globalData = {
  destinations: destinationType[],
  crew: crewType[],
  technology: techType[],
}

type globalContextType = {
  globalData: globalData,
  planet: string,
  setPlanet: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<globalContextType | undefined>(undefined);

export function useGlobal(): globalContextType {
  const context = useContext(GlobalContext);
  if(!context) {
    throw new Error("useGlobal must be used within a GlobalProvider")
  }
  return context;
}

export function GlobalProvider ({ children }: GlobalProviderProps): React.ReactElement {
  const globalData: globalData = Data;
  const [planet, setPlanet] = useState<string>("moon");

  const contextValue: globalContextType = {
    globalData,
    planet,
    setPlanet,
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}