import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import { CONTAINER_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useStyles = createUseStyles(
  createClasses(defaultTheme, CONTAINER_COMPONENT_NAMESPACE),
  {
    name: "container",
  }
);
