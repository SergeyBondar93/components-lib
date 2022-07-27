import { ComponentTheme } from "@cheaaa/theme";

import { INPUT_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultInputTheme: Required<ComponentTheme<ComponentNames>> = {
  [INPUT_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "10px",
    border: "1px solid rgba(113, 130, 153, 0.25)",
    backgroundColor: "#FFF",
    minWidth: "150px",
    display: "inline-flex",
    boxSizing: "border-box",
    height: "45px",

    position: "relative",

    '&[data-type-is-button="true"]': {
      caretColor: "transparent",
      cursor: "pointer",
    },

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

    /** Стили для инпута используемом в Select компоненте */
    "&[data-select-open]": {
      height: "100%",
    },
    '&[data-select-open="true"]': {
      alignItems: "flex-end",
      border: "1px solid #636AFF",
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
    textAlign: "initial",

    "&:not(:focus)::placeholder": {
      opacity: 0,
    },

    '&[data-type-is-button="true"]': {
      caretColor: "transparent",
      cursor: "pointer",
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

    /** Стили для инпута используемом в Select компоненте */
    "&[data-select-open]": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "&[data-select-open]::placeholder": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    '&[data-select-open="true"]': {
      padding: "6px 14px",
    },
    '&[data-select-open="true"]::placeholder': {
      opacity: "1",
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

    /** Стили для инпута используемом в Select компоненте */
    "&[data-select-open]": {
      cursor: "pointer",
      transition: "0.2s",
      height: "100%",
    },
    '&[data-select-open="true"]': {
      transform: "rotate(180deg)",
    },
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
    transition: "all .1s ease",
    color: "rgba(113, 130, 153, 0.8)",

    top: "50%",
    cursor: "text",
    transform: "translateY(-50%)",

    '&[data-type-is-button="true"]': {
      caretColor: "transparent",
      cursor: "pointer",
    },
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
    },
    '&[data-focused="true"]': {
      fontSize: "10px",
      top: "10px",
      color: "#636AFF",
    },
    '&[data-hasvalue="true"]': {
      fontSize: "10px",
      top: "10px",
    },

    /** Стили для инпута используемом в Select компоненте */
    '&[data-select-open="true"]': {
      fontSize: "10px",
      top: "10px",
      color: "#636AFF",
    },
  },
};
