import { Styles } from "@cheaaa/theme/src";

import { BUTTON_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof BUTTON_COMPONENTS_NAMES[keyof typeof BUTTON_COMPONENTS_NAMES];

export type ButtonTheme = {
  [key in ComponentNames]?: Styles;
};
