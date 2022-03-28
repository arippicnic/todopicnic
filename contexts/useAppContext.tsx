import { createContext, useContext, useReducer } from "react";

import { ContextType } from "../types/app";
import { useAppStore } from "../hooks/useAppStore";
import { initialState, actionAppReducer } from "../hooks/useAppReducer";

const AppContext = createContext<ContextType>({ state: initialState });
export const useAppContext = () => useContext(AppContext);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const contextValue = useAppStore(useReducer(actionAppReducer, initialState));

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
