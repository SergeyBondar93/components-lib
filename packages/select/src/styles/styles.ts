import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { SELECT_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, SELECT_COMPONENT_NAMESPACE),
  {
    name: "select",
  }
);
