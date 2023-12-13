import { combineReducers } from "@reduxjs/toolkit";
import zonesSlice from "./zonesSlice";
import ItemSlice from "./ItemSlice";

export const rootReducer = combineReducers({
  zones: zonesSlice,
  items: ItemSlice,
})

export type RootState = ReturnType<typeof rootReducer>