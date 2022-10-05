import { createUseStyles } from "react-jss";

import { createClasses } from "@cheaaa/theme";

import {
  HEADER_COMPONENT_NAMESPACE,
  SMOOTH_DROPDOWN_COMPONENT_NAMESPACE,
} from "./consts";
import { defaultTheme, smoothDropdownDefaultTheme } from "./defaultTheme";

export const useHeaderStyles = createUseStyles(
  createClasses(defaultTheme, HEADER_COMPONENT_NAMESPACE),
  {
    name: "header",
  }
);

export const useSmoothDropdownStyles = createUseStyles(
  createClasses(
    smoothDropdownDefaultTheme,
    SMOOTH_DROPDOWN_COMPONENT_NAMESPACE
  ),
  {
    name: "smooth-dropdown",
  }
);
