import { CONTAINER_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof CONTAINER_COMPONENTS_NAMES[keyof typeof CONTAINER_COMPONENTS_NAMES];
