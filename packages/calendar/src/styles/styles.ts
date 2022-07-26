import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { CALENDAR_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, CALENDAR_COMPONENT_NAMESPACE),
  {
    name: "calendar",
  }
);
