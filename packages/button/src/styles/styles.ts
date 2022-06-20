import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { BUTTON_COMPONENT_NAMESPACE } from "./consts";
import { defaultButtonTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultButtonTheme, BUTTON_COMPONENT_NAMESPACE),
  {
    name: "button",
  }
);
