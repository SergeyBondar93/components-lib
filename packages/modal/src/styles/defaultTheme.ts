import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";

import { ComponentTheme } from "@cheaaa/theme";

import { MODAL_COMPONENTS_NAMES, DEFAULT_ANIMATION_DURATION } from "./consts";
import { ComponentNames } from "./types";

export const defaultModalTheme: Required<ComponentTheme<ComponentNames>> = {
  [MODAL_COMPONENTS_NAMES.modalContent]: {
    transformOrigin: "top left",
    maxHeight: "100vh",
    transitionProperty: "transform, opacity",
    top: "50%",
    left: "50%",
    minHeight: "200px",
    overflow: "hidden",
    border: "1px solid black",
    backgroundColor: "white",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    zIndex: 3,
    transition: `${DEFAULT_ANIMATION_DURATION}ms`,

    [`&[data-animation-state="${ENTERING}"]`]: {
      transform: "scale(0.8) translate(-50%, -50%)",
      opacity: 0,
    },
    [`&[data-animation-state="${ENTERED}"]`]: {
      transform: "scale(1) translate(-50%, -50%)",
      opacity: 1,
    },
    [`&[data-animation-state="${EXITING}"]`]: {
      transform: "scale(0.8) translate(-50%, -50%)",
      opacity: 0,
    },
  },
  [MODAL_COMPONENTS_NAMES.childrenWrapper]: {
    overflow: "auto",
    padding: "10px",
    flexGrow: 1,
  },
  [MODAL_COMPONENTS_NAMES.headerWrapper]: {
    display: "flex",
    alignItems: "center",
    padding: "0px 8px",
    width: "100%",
    height: "30px",
    boxSizing: "border-box",
  },
  [MODAL_COMPONENTS_NAMES.titleWrapper]: {
    flexGrow: 1,
  },
  [MODAL_COMPONENTS_NAMES.closeButton]: {
    width: "14px",
    height: "14px",
    padding: "0px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
} as const;
