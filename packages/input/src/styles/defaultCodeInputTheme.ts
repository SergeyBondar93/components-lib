import { ComponentTheme } from "@cheaaa/theme";

import { INPUT_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const shakeAnimation = {
  "@keyframes shake": {
    "0%": {
      transform: "translateX(0)",
    },

    "25%": {
      transform: "translateX(-2px)",
    },

    "75%": {
      transform: "translateX(2px)",
    },

    "100%": {
      transform: "translateX(0)",
    },
  },
};

export const defaultCodeInputTheme: Required<ComponentTheme<ComponentNames>> = {
  [INPUT_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "10px",
    width: "63px",
    height: "73px",
    border: "1px solid rgba(113, 130, 153, 0.25)",
    backgroundColor: "#FFF",
    boxSizing: "border-box",
    margin: "10px",
    overflow: "hidden",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[data-invalid="true"]': {
      border: "1px solid #FF6666",
      animation: "$shake 0.1s linear 0s 3",
    },
    '&[data-valid="true"]': {
      border: "1px solid #2CA95E",
    },
    '&[data-focused="true"]': {
      border: "1px solid #636AFF",
    },
    '&[data-hasvalue="true"]': {},
  },
  [INPUT_COMPONENTS_NAMES.input]: {
    textAlign: "center",
    backgroundColor: "#FFF",
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "45px",

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&[data-focused="true"]': {
      color: "#636AFF",
    },
    '&[data-hasvalue="true"]': {
      color: "#636AFF",
    },
    '&[data-valid="true"]': {
      color: "#2CA95E",
    },
    '&[data-invalid="true"]': {
      color: "#FF6666",
    },
  },
  [INPUT_COMPONENTS_NAMES.prefixWrapper]: {},
  [INPUT_COMPONENTS_NAMES.postfixWrapper]: {},
  [INPUT_COMPONENTS_NAMES.clearIcon]: {},
  [INPUT_COMPONENTS_NAMES.label]: {},
};
