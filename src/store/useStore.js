import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../modules";
import { useMemo } from "react";

const initializeStore = () => {
  return configureStore({ reducer: rootReducer });
};

export const useStore = () => {
  return useMemo(() => initializeStore(), []);
};
