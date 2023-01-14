import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { SLIDER_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, SLIDER_COMPONENT_NAMESPACE),
  {
    name: "slider",
  }
);
