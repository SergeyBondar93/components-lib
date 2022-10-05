import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";

import { ComponentTheme } from "@cheaaa/theme";

import { BLANKET_COMPONENTS_NAMES, DEFAULT_ANIMATION_DURATION } from "./consts";
import { ComponentNames } from "./types";

export const defaultBlanketStyles: Required<ComponentTheme<ComponentNames>> = {
  [BLANKET_COMPONENTS_NAMES.overlay]: {
    top: "0px",
    left: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: "3",
    transitionProperty: "background, opacity",
    transitionDuration: `${DEFAULT_ANIMATION_DURATION}ms`,

    [`&[data-animation-state="${ENTERING}"]`]: {
      opacity: 0,
    },
    [`&[data-animation-state="${ENTERED}"]`]: {
      opacity: 0.55,
    },
    [`&[data-animation-state="${EXITING}"]`]: {
      opacity: 0,
    },
  },
};
