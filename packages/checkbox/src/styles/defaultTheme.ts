import { ComponentTheme } from "@cheaaa/theme";

import { CHECKBOX_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [CHECKBOX_COMPONENTS_NAMES.wrapper]: {
    height: "30px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
  [CHECKBOX_COMPONENTS_NAMES.input]: {
    display: "none",
  },
  [CHECKBOX_COMPONENTS_NAMES.iconWrapper]: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "1px solid rgba(113, 130, 153, 0.45)",
    backgroundColor: "#FFF",
    width: "20px",
    height: "20px",
    transition: "background-color 0.1s ease-in-out",
    userSelect: "none",

    '&[data-checked="true"]': {
      backgroundColor: "#636AFF",
    },
  },
  [CHECKBOX_COMPONENTS_NAMES.label]: {
    marginLeft: "8px",
  },
};
