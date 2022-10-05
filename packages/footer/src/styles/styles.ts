import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { FOOTER_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, FOOTER_COMPONENT_NAMESPACE),
  {
    name: "footer",
  }
);
