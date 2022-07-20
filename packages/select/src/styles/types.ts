import { SELECT_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof SELECT_COMPONENTS_NAMES[keyof typeof SELECT_COMPONENTS_NAMES];
