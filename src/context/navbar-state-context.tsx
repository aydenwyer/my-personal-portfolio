"use client";

import React, { useState, createContext, useContext } from "react";

type Props = { children: React.ReactNode };

type NavbarStateContextType = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavbarStateContext = createContext<NavbarStateContextType | null>(
  null
);

const NavbarStateContextProvider = ({ children }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <NavbarStateContext.Provider
      value={{
        navOpen,
        setNavOpen,
      }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};

export function useNavbarStateContext() {
  const context = useContext(NavbarStateContext);

  if (context == null) {
    throw new Error(
      "useNavbarStateContext must be used within an navbarStateContextProvider"
    );
  }

  return context;
}

export default NavbarStateContextProvider;
