import { HEADER_COMPONENTS_NAMES } from "./consts";

export type HeaderComponentNames =
  typeof HEADER_COMPONENTS_NAMES[keyof typeof HEADER_COMPONENTS_NAMES];
