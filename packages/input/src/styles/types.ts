import { INPUT_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof INPUT_COMPONENTS_NAMES[keyof typeof INPUT_COMPONENTS_NAMES];
