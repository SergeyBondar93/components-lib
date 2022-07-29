import { TABS_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof TABS_COMPONENTS_NAMES[keyof typeof TABS_COMPONENTS_NAMES];
