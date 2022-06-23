import { ComponentTheme } from "@cheaaa/theme";

import { INPUT_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultInputTheme: Required<ComponentTheme<ComponentNames>> = {
  [INPUT_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "10px",
    border: "1px solid rgba(113, 130, 153, 0.25)",
    backgroundColor: "#FFF",
    minWidth: "220px",
    display: "inline-flex",
    boxSizing: "border-box",
    height: "45px",

    position: "relative",

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
    '&[data-valid="true"]': {
      border: "1px solid #2CA95E",
    },
    '&[data-focused="true"]': {
      alignItems: "flex-end",
      border: "1px solid #636AFF",
    },
    '&[data-hasvalue="true"]': {
      alignItems: "flex-end",
    },
    '&[data-invalid="true"]': {
      border: "1px solid #FF6666",
    },
  },
  [INPUT_COMPONENTS_NAMES.input]: {
    backgroundColor: "#FFF",
    border: "none",
    outline: "none",
    padding: "14px 14px",
    borderRadius: "9px",
    width: "100%",
    fontSize: "13px",

    "&:not(:focus)::placeholder": {
      opacity: 0,
    },

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },

    '&[data-focused="true"]': {
      padding: "6px 14px",
    },
    '&[data-hasvalue="true"]': {
      padding: "6px 14px",
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
    alignSelf: "center",
    marginRight: "5px",
    flexShrink: 0,
    width: "15px",
    height: "15px",
    padding: "8px 8px 8px 0px",
    boxSizing: "content-box",
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
  [INPUT_COMPONENTS_NAMES.label]: {
    fontSize: "13px",
    position: "absolute",
    transition: "0.2s",
    color: "#718299",

    top: "50%",
    transform: "translateY(-50%)",
    '&[data-focused="true"]': {
      fontSize: "10px",
      top: "10px",
      color: "#636AFF",
    },
    '&[data-hasvalue="true"]': {
      fontSize: "10px",
      top: "10px",
      color: "#636AFF",
    },
  },
};
