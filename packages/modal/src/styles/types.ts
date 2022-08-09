import { MODAL_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof MODAL_COMPONENTS_NAMES[keyof typeof MODAL_COMPONENTS_NAMES];
