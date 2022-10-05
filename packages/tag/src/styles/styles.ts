import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { TAG_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, TAG_COMPONENT_NAMESPACE),
  {
    name: "tag",
  }
);
