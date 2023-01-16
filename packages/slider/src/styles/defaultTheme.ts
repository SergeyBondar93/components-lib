import { ComponentTheme } from "@cheaaa/theme";

import { SLIDER_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

const isSlidingStyles = {
  boxShadow: "0px 0px 0px 8px #636AFF",
};

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [SLIDER_COMPONENTS_NAMES.wrapper]: {
    width: "400px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  [SLIDER_COMPONENTS_NAMES.filledLine]: {
    height: "3px",
    background: "#636AFF",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "0%",
    zIndex: 1,
  },
  [SLIDER_COMPONENTS_NAMES.line]: {
    width: "100%",
    height: "3px",
    background: "#EDF4FE",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  [SLIDER_COMPONENTS_NAMES.pointWrapper]: {
    position: "absolute",
    width: "30px",
    height: "30px",
    transform: "translateX(-50%)",
    borderRadius: "50%",
    zIndex: 1,
    "&:hover": {
      "& > span": {
        ...isSlidingStyles,
      },
    },
  },

  [SLIDER_COMPONENTS_NAMES.point]: {
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#636AFF",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "0.3s",
    transitionProperty: "box-shadow",

    '&[data-is-sliding="true"]': {
      ...isSlidingStyles,
    },
  },

  [SLIDER_COMPONENTS_NAMES.tooltipWrapper]: {
    position: "absolute",
    transform: "translateX(-50%)",
    minWidth: "40px",
    minHeight: "40px",
    borderRadius: "9px",
    color: "white",
    transition: "0.3s",
    transitionProperty: "opacity, background, top",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",

    "&:before": {
      content: "''",
      width: "0px",
      height: "0px",
      border: "0.8em solid transparent",
      position: "absolute",
      transform: "translateX(-50%)",
      left: "50%",
      bottom: "-22px",
      borderTop: "10px solid #444",
      opacity: 0,
      transition: "0.3s",
    },

    background: "rgba(0,0,0,0)",
    top: "-30px",
    opacity: 0,
    '&[data-is-sliding="true"]': {
      background: "rgba(0,0,0,0.72)",
      opacity: 1,
      top: "-52px",

      "&:before": {
        opacity: 1,
      },
    },
  },
  [SLIDER_COMPONENTS_NAMES.tooltipValue]: {
    padding: "10px",
  },
};
