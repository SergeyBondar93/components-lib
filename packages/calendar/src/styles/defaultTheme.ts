import { ComponentTheme } from "@cheaaa/theme";

import { CALENDAR_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [CALENDAR_COMPONENTS_NAMES.wrapper]: {
    width: 244,
    backgroundColor: "#FFF",
    padding: "10px",
    boxSizing: "border-box",
  },
  [CALENDAR_COMPONENTS_NAMES.headerWrapper]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 34,
    fontWeight: 500,
  },
  [CALENDAR_COMPONENTS_NAMES.titleWrapper]: {},

  [CALENDAR_COMPONENTS_NAMES.changeMonthButtonWrapper]: {
    padding: "0px",
    width: "28px",
    height: "100%",
    outline: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },

    '&[data-is-next="true"]': {
      transform: "rotate(180deg)",
    },
  },

  [CALENDAR_COMPONENTS_NAMES.monthWrapper]: {
    marginRight: "5px",
    color: "#101820",
    fontSize: "15px",
  },
  [CALENDAR_COMPONENTS_NAMES.yearWrapper]: {
    color: "#101820",
    fontSize: "15px",
  },
  [CALENDAR_COMPONENTS_NAMES.table]: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "7px",
  },
  [CALENDAR_COMPONENTS_NAMES.weekday]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% / 7)",
    aspectRatio: "1/1",
    color: "rgba(113, 130, 153, 0.55)",
    fontSize: "12px",
    letterSpacing: "-0.3px",
  },
  [CALENDAR_COMPONENTS_NAMES.day]: {
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
    '&[data-in-range="true"]': {},
  },
};
