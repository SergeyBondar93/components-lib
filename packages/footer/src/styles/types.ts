import { FOOTER_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof FOOTER_COMPONENTS_NAMES[keyof typeof FOOTER_COMPONENTS_NAMES];
