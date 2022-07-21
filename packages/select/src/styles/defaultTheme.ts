import { ComponentTheme } from "@cheaaa/theme";

import { SELECT_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [SELECT_COMPONENTS_NAMES.wrapper]: {
    position: "relative",
    width: "300px",
  },
  [SELECT_COMPONENTS_NAMES.dropdown]: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    background: "white",
    transform: "translateY(10px)",
    boxShadow: "0 2px 12px rgb(0 0 0 / 15%)",
    borderRadius: "0px 0px 12px 12px",
  },
  [SELECT_COMPONENTS_NAMES.groupWrapper]: {
    boxSizing: "border-box",
    width: "100%",
  },
  [SELECT_COMPONENTS_NAMES.groupHeader]: {
    height: "24px",
    padding: "0px 15px",
    display: "flex",
    alignItems: "center",
    background: "rgba(113, 130, 153, 0.15)",
    color: "#485B75",
    fontSize: "9.5px",
  },
  [SELECT_COMPONENTS_NAMES.list]: {
    boxSizing: "border-box",
    position: "relative",
    maxHeight: "164px",
    overflowY: "auto",
    // TODO сделать видимый слегка заметный скроллбар
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
  },
  [SELECT_COMPONENTS_NAMES.listItem]: {
    padding: "0px 15px",
    height: "30px",
    boxSizing: "border-box",
    userSelect: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid rgba(113, 130, 153, 0.15)",
    fontSize: "14px",
    cursor: "pointer",
    '&[data-active="true"]': {
      background: "#E5ECF7",
    },
    '&[data-disabled="true"]': {
      opacity: "0.7",
      cursor: "not-allowed",
    },
  },
  [SELECT_COMPONENTS_NAMES.removeIconWrapper]: {
    "& svg": {
      "& path": {
        fill: "#718299",
      },
    },
  },
  [SELECT_COMPONENTS_NAMES.noOptionsMessage]: {
    color: "rgba(113, 130, 153, 0.55)",
    height: "32px",
    display: "flex",
    fontSize: "14px",
    alignItems: "center",
    paddingLeft: "15px",
  },
};
