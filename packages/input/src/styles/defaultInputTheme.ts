import { ComponentTheme } from "@cheaaa/theme";

import { INPUT_AUTOCOMPLETE_SELECTOR, INPUT_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultInputTheme: Required<ComponentTheme<ComponentNames>> = {
  [INPUT_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "10px",
    border: "1px solid rgba(113, 130, 153, 0.25)",
    backgroundColor: "#FFF",
    minWidth: "100px",
    display: "inline-flex",
    boxSizing: "border-box",
    minHeight: "45px",
    height: "45px",

    position: "relative",

    '&[data-type-is-button="true"]': {
      caretColor: "transparent",
      cursor: "pointer",
    },

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
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

    /**
     * Стили для инпута используемом в других компонентах,
     * для управления стилями когда компонент активен но инпут не в фокусе
     * */
    "&[data-component-active]": {
      height: "100%",
    },
    '&[data-component-active="true"]': {
      alignItems: "flex-end",
      border: "1px solid #636AFF",
    },
  },
  [INPUT_COMPONENTS_NAMES.input]: {
    backgroundColor: "#FFF",
    border: "none",
    outline: "none",
    padding: "14px 14px",
    borderRadius: "10px",
    width: "100%",
    fontSize: "13px",
    textAlign: "initial",

    background: "red",
    [INPUT_AUTOCOMPLETE_SELECTOR]: {
      transition: "background-color 600000s 0s, color 600000s 0s",
    },

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

    /**
     * Стили для инпута используемом в других компонентах,
     * для управления стилями когда компонент активен но инпут не в фокусе
     * */
    "&[data-component-active]": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    '&[data-component-active="true"]': {
      padding: "6px 14px",
    },
    '&[data-component-active="true"]::placeholder': {
      opacity: "1",
    },
  },
  [INPUT_COMPONENTS_NAMES.prefixWrapper]: {
    marginRight: "12px",
    alignSelf: "center",
    transition: "0.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    /**
     * Стили для инпута используемом в других компонентах,
     * для управления стилями когда компонент активен но инпут не в фокусе
     * */
    "&[data-component-active]": {
      cursor: "pointer",
    },
  },
  [INPUT_COMPONENTS_NAMES.postfixWrapper]: {
    marginRight: "12px",
    alignSelf: "center",
    transition: "0.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    /**
     * Стили для инпута используемом в других компонентах,
     * для управления стилями когда компонент активен но инпут не в фокусе
     * */
    "&[data-component-active]": {
      cursor: "pointer",
    },
    // '&[data-component-active="true"]': {
    //   transform: "rotate(180deg)",
    // },
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
      opacity: 0.7,
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
      opacity: 0.7,
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

    /**
     * Стили для инпута используемом в других компонентах,
     * для управления стилями когда компонент активен но инпут не в фокусе
     * */
    '&[data-component-active="true"]': {
      fontSize: "10px",
      top: "10px",
      color: "#636AFF",
    },
  },
};
