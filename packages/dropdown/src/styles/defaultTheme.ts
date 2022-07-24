import { ComponentTheme } from "@cheaaa/theme";

import { DROPDOWN_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [DROPDOWN_COMPONENTS_NAMES.wrapper]: {
    position: "relative",
  },
  [DROPDOWN_COMPONENTS_NAMES.title]: {},
  [DROPDOWN_COMPONENTS_NAMES.icon]: {
    display: "none",
    transition: "0.2s",
    fill: "#718299",
    '&[data-is-open="true"]': {
      transform: "rotate(90deg)",
    },
  },
  [DROPDOWN_COMPONENTS_NAMES.body]: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    background: "#FFF",
    maxHeight: "200px",
    overflow: "auto",
    boxShadow: "0 2px 12px rgb(0 0 0 / 15%)",
    borderRadius: "0px 0px 12px 12px",
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#485B75",
    },
  },
  [DROPDOWN_COMPONENTS_NAMES.childrenWrapper]: {
    padding: "3px",
  },
};
