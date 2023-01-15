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
  },
  [SLIDER_COMPONENTS_NAMES.line]: {
    width: "100%",
    height: "3px",
    background: "#EDF4FE",
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
};
