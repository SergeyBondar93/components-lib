import { TOOLTIP_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof TOOLTIP_COMPONENTS_NAMES[keyof typeof TOOLTIP_COMPONENTS_NAMES];
