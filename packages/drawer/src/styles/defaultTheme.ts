import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";

import { ComponentTheme } from "@cheaaa/theme";

import { DRAWER_COMPONENTS_NAMES, DEFAULT_ANIMATION_DURATION } from "./consts";
import { ComponentNames } from "./types";

export const defaultDrawerTheme: Required<ComponentTheme<ComponentNames>> = {
  [DRAWER_COMPONENTS_NAMES.modalContent]: {
    top: "0px",
    left: "0px",
    width: "200px",
    border: "1px solid black",
    display: "flex",
    zIndex: "3",
    overflow: "hidden",
    position: "fixed",
    boxSizing: "border-box",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "white",
    transition: `${DEFAULT_ANIMATION_DURATION}ms`,

    [`&[data-animation-state="${ENTERING}"]`]: {
      transform: "translateX(-101%)",
      opacity: 0,
    },
    [`&[data-animation-state="${ENTERED}"]`]: {
      transform: "translateX(0px)",
      opacity: 1,
    },
    [`&[data-animation-state="${EXITING}"]`]: {
      transform: "translateX(-101%)",
      opacity: 0,
    },
  },
  [DRAWER_COMPONENTS_NAMES.childrenWrapper]: {
    overflow: "auto",
    padding: "10px",
    flexGrow: 1,
  },
  [DRAWER_COMPONENTS_NAMES.headerWrapper]: {
    display: "flex",
    alignItems: "center",
    padding: "0px 8px",
    width: "100%",
    height: "30px",
    boxSizing: "border-box",
  },
  [DRAWER_COMPONENTS_NAMES.titleWrapper]: {
    flexGrow: 1,
  },
  [DRAWER_COMPONENTS_NAMES.closeButton]: {
    width: "14px",
    height: "14px",
    padding: "0px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
} as const;
