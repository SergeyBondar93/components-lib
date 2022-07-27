import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { DATEPICKER_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, DATEPICKER_COMPONENT_NAMESPACE),
  {
    name: "datepicker",
  }
);
