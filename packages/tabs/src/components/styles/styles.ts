import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { TABS_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, TABS_COMPONENT_NAMESPACE),
  {
    name: "tabs",
  }
);
