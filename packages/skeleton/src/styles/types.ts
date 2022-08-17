import { SKELETON_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof SKELETON_COMPONENTS_NAMES[keyof typeof SKELETON_COMPONENTS_NAMES];
