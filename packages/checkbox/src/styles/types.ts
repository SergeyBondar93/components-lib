import { CHECKBOX_COMPONENTS_NAMES, SWITCHER_COMPONENTS_NAMES } from "./consts";

export type CheckboxComponentNames =
  typeof CHECKBOX_COMPONENTS_NAMES[keyof typeof CHECKBOX_COMPONENTS_NAMES];

export type SwitcherComponentNames =
  typeof SWITCHER_COMPONENTS_NAMES[keyof typeof SWITCHER_COMPONENTS_NAMES];
