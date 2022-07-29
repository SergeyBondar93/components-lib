import { ComponentTheme } from "@cheaaa/theme";

import { TABS_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [TABS_COMPONENTS_NAMES.TabsList]: {
    position: "relative",
    maxWidth: "100%",
    display: "flex",
    border: "none",
    overflowY: "hidden",
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-ms-overflow-style": "none" /* IE and Edge */,
    "scrollbar-width": "none",
  },
  [TABS_COMPONENTS_NAMES.highlighter]: {
    position: "absolute",
    bottom: 0,
    height: "3px",
    borderRadius: "2px",
    background: "#636AFF",
    transition: "0.5s",
  },
  [TABS_COMPONENTS_NAMES.tabLabel]: {
    border: "0px",
    padding: "7px 0px 10px 0px",
    marginLeft: "13px",
    letterSpacing: "-0.45px",
    color: "#718299",
    background: "transparent",
    flexShrink: 0,
    cursor: "pointer",
    '&[data-selected="true"]': {
      color: "#101820",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
};
