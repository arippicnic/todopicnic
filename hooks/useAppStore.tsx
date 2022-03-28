import { useMemo, useEffect } from "react";

import { StateType, ActionType } from "../types/app";
import { initialState } from "./useAppReducer";

export function useAppStore([state, dispatch]: [StateType, React.Dispatch<ActionType>]) {
  const keyLocal = "appInfo";
  useEffect(() => {
    const local = localStorage.getItem(keyLocal);
    const localJSON = local ? JSON.parse(local) : null;

    if (localJSON) {
      dispatch({
        type: "STORAGE",
        value: localJSON,
      });
    } else {
      localStorage.setItem(keyLocal, JSON.stringify(state));
      dispatch({
        type: "STORAGE",
        value: state,
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(keyLocal, JSON.stringify(state));
    }
  }, [state]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return contextValue;
}
