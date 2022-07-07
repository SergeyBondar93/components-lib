import { Styles } from "@cheaaa/theme";

import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_GROUP_COMPONENTS_NAMES,
} from "./consts";

export type ButtonComponentNames =
  typeof BUTTON_COMPONENTS_NAMES[keyof typeof BUTTON_COMPONENTS_NAMES];

export type ButtonGroupComponentNames =
  typeof BUTTON_GROUP_COMPONENTS_NAMES[keyof typeof BUTTON_GROUP_COMPONENTS_NAMES];

export type ButtonTheme = {
  [key in ButtonComponentNames]?: Styles;
};
