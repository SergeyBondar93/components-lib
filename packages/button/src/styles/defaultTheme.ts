import { ComponentTheme } from "@cheaaa/theme";

import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_GROUP_COMPONENTS_NAMES,
} from "./consts";
import { ButtonComponentNames, ButtonGroupComponentNames } from "./types";

export const defaultButtonTheme: Required<
  ComponentTheme<ButtonComponentNames>
> = {
  [BUTTON_COMPONENTS_NAMES.button]: {
    padding: "10px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#B1BAC7",
    textDecoration: "none",
    cursor: "pointer",
    transition: "0.2s",
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

export const defaultIconButtonTheme: Required<
  ComponentTheme<ButtonComponentNames>
> = {
  [BUTTON_COMPONENTS_NAMES.button]: {
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

export const defaultButtonGroupTheme: Required<
  ComponentTheme<ButtonGroupComponentNames>
> = {
  [BUTTON_GROUP_COMPONENTS_NAMES.wrapper]: {
    display: "inline-flex",
  },
  [BUTTON_GROUP_COMPONENTS_NAMES.button]: {
    marginRight: "8px",
    marginBottom: "8px",
    padding: "5px 8px",
    borderRadius: "8px",
    border: "1px solid #636AFF",
    backgroundColor: "transparent",
    textDecoration: "none",
    cursor: "pointer",
    transition: "0.2s transform",
    color: "#636AFF",
    "&:active:enabled": {
      transform: "scale(0.9)",
    },
    "&:hover": {
      background: "#EDF4FE",
    },
    '&[data-selected="true"]': {
      color: "#FFF",
      background: "#636AFF",
    },
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[shouldfitcontent="true"]': {
      width: "100%",
      marginRight: "0px",
    },
  },
};
