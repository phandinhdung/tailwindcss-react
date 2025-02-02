import { createContext, useState } from "react";

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {

  return (
    <OurShopContext.Provider >
      {children}
    </OurShopContext.Provider>
  );
};