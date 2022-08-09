import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { HEADER_COMPONENT_NAMESPACE } from "./consts";
import { defaultTheme } from "./defaultTheme";

export const useHeaderStyles = createUseStyles(
  createClasses(defaultTheme, HEADER_COMPONENT_NAMESPACE),
  {
    name: "header",
  }
);
