import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import {
  CHECKBOX_COMPONENT_NAMESPACE,
  SWITCH_COMPONENT_NAMESPACE,
} from "./consts";
import { defaultCheckboxTheme, defaultSwitchTheme } from "./defaultTheme";

export const useCheckboxStyles = createUseStyles(
  createClasses(defaultCheckboxTheme, CHECKBOX_COMPONENT_NAMESPACE),
  {
    name: "checkbox",
  }
);

export const useSwitchStyles = createUseStyles(
  createClasses(defaultSwitchTheme, SWITCH_COMPONENT_NAMESPACE),
  {
    name: "switch",
  }
);
