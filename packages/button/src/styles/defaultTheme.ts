import { ComponentTheme } from "@cheaaa/theme";

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
    transition: "0.2s transform",
    "&:active:enabled": {
      transform: "scale(0.9)",
    },
    "&:hover": {
      background: "#718299",
    },
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[shouldfitcontent="true"]': {
      width: "100%",
    },
  },
};

export const defaultIconButtonTheme: Required<ComponentTheme<ComponentNames>> =
  {
    [BUTTON_COMPONENTS_NAMES.wrapper]: {
      boxSizing: "border-box",
      padding: "4px",
      display: "inline-flex",
      justifyContent: "center",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "transparent",
      textDecoration: "none",
      cursor: "pointer",
      transition: "0.2s transform",
      "&:hover": {
        filter: "brightness(85%)",
      },
      '&:active[data-disabled="false"]': {
        transform: "scale(0.9)",
      },
      '&[data-disabled="true"]': {
        cursor: "not-allowed",
        opacity: 0.7,
      },
      '&[shouldfitcontent="true"]': {
        width: "100%",
      },
    },
  };
