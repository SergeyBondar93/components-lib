import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { CHECKBOX_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, CHECKBOX_COMPONENT_NAMESPACE),
  {
    name: "checkbox",
  }
);
