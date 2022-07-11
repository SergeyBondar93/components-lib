import { TAG_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof TAG_COMPONENTS_NAMES[keyof typeof TAG_COMPONENTS_NAMES];
