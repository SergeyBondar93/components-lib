import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { ACCORDION_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, ACCORDION_COMPONENT_NAMESPACE),
  {
    name: "accordion",
  }
);
