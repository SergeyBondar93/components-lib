import { ComponentTheme } from "@cheaaa/theme/src";

import { BUTTON_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultButtonTheme: Required<ComponentTheme<ComponentNames>> = {
  [BUTTON_COMPONENTS_NAMES.wrapper]: {
    padding: "10px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#B1BAC7",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      background: "#718299",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[shouldfitcontent="true"]': {
      width: "100%",
    },
  },
};
