import { createClasses } from "@cheaaa/theme";
import { createUseStyles } from "react-jss";

import { HEADER_COMPONENT_NAMESPACE } from "./consts";
import { defaultHeaderDropdownTheme } from "./defaultThemes";

export const useHeaderStyles = createUseStyles(
  createClasses(defaultHeaderDropdownTheme, HEADER_COMPONENT_NAMESPACE),
  {
    name: "header",
  }
);
