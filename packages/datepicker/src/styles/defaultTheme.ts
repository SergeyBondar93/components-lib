import { ComponentTheme } from "@cheaaa/theme";

import { DATEPICKER_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  /** Accordion Styles */
  [DATEPICKER_COMPONENTS_NAMES.wrapper]: {
    position: "relative",
    display: "inline-block",
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
  },
  [DATEPICKER_COMPONENTS_NAMES.icon]: {
    display: "none",
    transition: "0.2s",
    fill: "#718299",
    '&[data-is-open="true"]': {
      transform: "rotate(90deg)",
    },
  },
  [DATEPICKER_COMPONENTS_NAMES.body]: {
    position: "absolute",
    zIndex: 1,
    background: "#FFF",
    maxHeight: "fit-content",
    transform: "translateY(10px)",
    boxShadow: "0 2px 12px rgb(0 0 0 / 15%)",
    borderRadius: "0px 0px 12px 12px",
    overflow: "hidden",
  },
  /**
   * для отступа внутри children для правильного
   * высчитывания размеров блока необходимо добавлять padding к children
   */
  [DATEPICKER_COMPONENTS_NAMES.childrenWrapper]: {},

  /** Calendar Styles  */
  [DATEPICKER_COMPONENTS_NAMES.calendarWrapper]: {
    width: 244,
    backgroundColor: "#FFF",
    padding: "10px",
    boxSizing: "border-box",
  },
  [DATEPICKER_COMPONENTS_NAMES.headerWrapper]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 34,
    fontWeight: 500,
  },
  [DATEPICKER_COMPONENTS_NAMES.titleWrapper]: {},

  [DATEPICKER_COMPONENTS_NAMES.changeMonthButtonWrapper]: {
    padding: "0px",
    width: "28px",
    height: "100%",
    outline: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
    "&:focus": {
      outline: "none",
    },

    '&[data-is-next="true"]': {
      transform: "rotate(180deg)",
    },
  },

  [DATEPICKER_COMPONENTS_NAMES.monthWrapper]: {
    marginRight: "5px",
    color: "#101820",
    fontSize: "15px",
    textTransform: "capitalize",
  },
  [DATEPICKER_COMPONENTS_NAMES.yearWrapper]: {
    color: "#101820",
    fontSize: "15px",
  },
  [DATEPICKER_COMPONENTS_NAMES.table]: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "7px",
  },
  [DATEPICKER_COMPONENTS_NAMES.weekday]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% / 7)",
    aspectRatio: "1/1",
    color: "rgba(113, 130, 153, 0.55)",
    fontSize: "12px",
    letterSpacing: "-0.3px",
    textTransform: "uppercase",
  },
  [DATEPICKER_COMPONENTS_NAMES.day]: {
    width: "calc(100% / 7)",
    aspectRatio: "1/1",
    padding: "0px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    borderRadius: 9,
    fontSize: "14px",
    color: "#101820",
    "&:focus": {
      outline: "none",
    },
    "&[disabled]": {
      opacity: 0.55,
      cursor: "not-allowed",
    },
    "&:hover": {
      background: "#EDF4FE",
      color: "#636AFF",
    },

    '&[data-is-today="true"]': {
      color: "#FF6666",
    },
    '&[data-is-selected="true"]': {
      background: "#636AFF",
      color: "#FFF",
    },
    '&[data-in-range="true"]': {
      background: "#EDF4FE",
      color: "#636AFF",
    },
  },
};
