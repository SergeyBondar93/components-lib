import { createClasses } from "@cheaaa/theme/src";
import { createUseStyles } from "react-jss";

import { INPUT_COMPONENT_NAMESPACE } from "./consts";
import { defaultButtonTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultButtonTheme, INPUT_COMPONENT_NAMESPACE),
  {
    name: "input",
  }
);
