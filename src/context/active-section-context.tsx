"use client";

import React, { useState, createContext, useContext } from "react";
import { NAV_LINKS } from "../lib/_constants";

type SectionName = (typeof NAV_LINKS)[number]["linkName"];

type Props = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Services");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // We need this to disable the oberver if a link is clicked for a certain amount of time.

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error(
      "useActiveSectionContext must be used within an activeSectionContextProvider"
    );
  }

  return context;
}

export default ActiveSectionContextProvider;
