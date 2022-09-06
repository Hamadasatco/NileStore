import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const NileStore = createStore(ShopReducer);