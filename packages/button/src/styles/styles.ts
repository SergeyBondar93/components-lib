import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import {
  BUTTON_COMPONENT_NAMESPACE,
  ICON_BUTTON_COMPONENT_NAMESPACE,
} from "./consts";
import { defaultButtonTheme, defaultIconButtonTheme } from "./defaultTheme";

export const useButtonStyles = createUseStyles(
  createClasses(defaultButtonTheme, BUTTON_COMPONENT_NAMESPACE),
  {
    name: "button",
  }
);

export const useIconButtonStyles = createUseStyles(
  createClasses(defaultIconButtonTheme, ICON_BUTTON_COMPONENT_NAMESPACE),
  {
    name: "icon-button",
  }
);
