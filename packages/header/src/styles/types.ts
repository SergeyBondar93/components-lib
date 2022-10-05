import {
  HEADER_COMPONENTS_NAMES,
  SMOOTH_DROPDOWN_COMPONENTS_NAMES,
} from "./consts";

export type HeaderComponentNames =
  typeof HEADER_COMPONENTS_NAMES[keyof typeof HEADER_COMPONENTS_NAMES];

export type SmoothDropdownComponentNames =
  typeof SMOOTH_DROPDOWN_COMPONENTS_NAMES[keyof typeof SMOOTH_DROPDOWN_COMPONENTS_NAMES];
