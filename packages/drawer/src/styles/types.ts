import { DRAWER_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof DRAWER_COMPONENTS_NAMES[keyof typeof DRAWER_COMPONENTS_NAMES];
