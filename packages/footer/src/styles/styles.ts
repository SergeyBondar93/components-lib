import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { FOOTER_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, FOOTER_COMPONENT_NAMESPACE),
  {
    name: "footer",
  }
);
