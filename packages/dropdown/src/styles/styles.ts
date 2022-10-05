import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { DROPDOWN_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, DROPDOWN_COMPONENT_NAMESPACE),
  {
    name: "dropdown",
  }
);
