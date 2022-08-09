import { BLANKET_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof BLANKET_COMPONENTS_NAMES[keyof typeof BLANKET_COMPONENTS_NAMES];
