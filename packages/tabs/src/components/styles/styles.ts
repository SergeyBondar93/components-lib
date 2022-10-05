import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { TABS_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, TABS_COMPONENT_NAMESPACE),
  {
    name: "tabs",
  }
);
