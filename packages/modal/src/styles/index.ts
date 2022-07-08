import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { MODAL_COMPONENT_NAMESPACE } from "./consts";
import { defaultModalTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultModalTheme, MODAL_COMPONENT_NAMESPACE),
  {
    name: "modal",
  }
);

export * from "./consts";
