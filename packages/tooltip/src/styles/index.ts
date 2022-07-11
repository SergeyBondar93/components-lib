import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { TOOLTIP_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, TOOLTIP_COMPONENT_NAMESPACE),
  {
    name: "tooltip",
  }
);

export * from "./consts";
