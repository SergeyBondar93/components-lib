import { ComponentTheme, BREAKPOINTS } from "@cheaaa/theme";

import { CONTAINER_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [CONTAINER_COMPONENTS_NAMES.wrapper]: {
    width: "100%",
    height: "100%",
    maxWidth: 1160,
    margin: "0 auto",
    padding: "0 15px",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    boxSizing: "border-box",
    [BREAKPOINTS.up("xl")]: {
      padding: "0 14px",
    },
  },
};
