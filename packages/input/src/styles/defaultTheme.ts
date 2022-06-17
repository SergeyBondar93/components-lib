import { ComponentTheme } from "@cheaaa/theme/src";

import { INPUT_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultButtonTheme: Required<ComponentTheme<ComponentNames>> = {
  [INPUT_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "10px",
    border: "1px solid rgba(113, 130, 153, 0.25)",
    backgroundColor: "#FFF",
    minWidth: "150px",
    display: "inline-flex",
    alignItems: "center",
    boxSizing: "border-box",

    position: "relative",

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
    '&[data-focused="true"]': {
      border: "1px solid #636AFF",
    },
    '&[data-invalid="true"]': {
      border: "1px solid #FF6666",
    },
    '&[data-valid="true"]': {
      border: "1px solid #2CA95E",
    },
  },
  [INPUT_COMPONENTS_NAMES.input]: {
    backgroundColor: "#FFF",
    border: "none",
    outline: "none",
    padding: "9px 12px",
    borderRadius: "9px",
    width: "100%",
    fontSize: "15.5px",
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
  [INPUT_COMPONENTS_NAMES.prefixWrapper]: {
    marginLeft: "12px",
    display: "flex",
    alignItems: "center",
  },
  [INPUT_COMPONENTS_NAMES.postfixWrapper]: {
    marginRight: "12px",
    display: "flex",
    alignItems: "center",
  },
  [INPUT_COMPONENTS_NAMES.clearIcon]: {
    marginRight: "5px",
    flexShrink: 0,
    width: "15px",
    height: "15px",
    padding: "8px 8px 8px 0px",

    cursor: "pointer",

    fill: "rgba(113, 130, 153, 0.25)",
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
    },
    '&[data-focused="true"]': {
      fill: "#636AFF",
    },
    '&[data-invalid="true"]': {
      fill: "#FF6666",
    },
    '&[data-valid="true"]': {
      fill: "#2CA95E",
    },
  },
  [INPUT_COMPONENTS_NAMES.placeholder]: {
    fontSize: "15.5px",
    position: "absolute",
    transition: "0.2s",
    color: "#718299",
    '&[data-focused="true"]': {
      transform: "scale(.7) translateX(-25%) translateY(-25px)",
      background: "#FFF",
    },
    '&[data-hasvalue="true"]': {
      transform: "scale(.7) translateX(-25%) translateY(-25px)",
      background: "#FFF",
    },
  },
};
