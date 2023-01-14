import { SLIDER_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof SLIDER_COMPONENTS_NAMES[keyof typeof SLIDER_COMPONENTS_NAMES];
