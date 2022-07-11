import { ComponentTheme } from "@cheaaa/theme";

import { TAG_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [TAG_COMPONENTS_NAMES.wrapper]: {
    display: "inline-flex",
    borderRadius: "7px",
    marginRight: "6px",
    // display: 'flex',
    alignItems: "center",
    padding: "5px 8px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    border: "1px solid black",
  },
  [TAG_COMPONENTS_NAMES.prefix]: {
    marginRight: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [TAG_COMPONENTS_NAMES.postfix]: {
    marginLeft: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
