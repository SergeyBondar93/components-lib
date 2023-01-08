import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { DRAWER_COMPONENT_NAMESPACE } from "./consts";
import { defaultDrawerTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultDrawerTheme, DRAWER_COMPONENT_NAMESPACE),
  {
    name: "drawer",
  }
);

export * from "./consts";
