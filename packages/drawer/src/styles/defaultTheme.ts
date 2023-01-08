import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";

import { ComponentTheme } from "@cheaaa/theme";

import {
  DRAWER_COMPONENTS_NAMES,
  DEFAULT_ANIMATION_DURATION,
  DRAWER_POSITION_BOTTOM,
  DRAWER_POSITION_LEFT,
  DRAWER_POSITION_RIGHT,
  DRAWER_POSITION_TOP,
} from "./consts";
import { ComponentNames } from "./types";

export const defaultDrawerTheme: Required<ComponentTheme<ComponentNames>> = {
  [DRAWER_COMPONENTS_NAMES.modalContent]: {
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
      opacity: 0,
    },
    [`&[data-animation-state="${ENTERED}"]`]: {
      opacity: 1,
    },
    [`&[data-animation-state="${EXITING}"]`]: {
      opacity: 0,
    },

    /** LEFT */
    [`&[data-animation-state="${ENTERING}"][data-drawer-position="${DRAWER_POSITION_LEFT}"]`]:
      {
        transform: "translateX(-101%)",
      },
    [`&[data-animation-state="${ENTERED}"][data-drawer-position="${DRAWER_POSITION_LEFT}"]`]:
      {
        transform: "translateX(0px)",
      },
    [`&[data-animation-state="${EXITING}"][data-drawer-position="${DRAWER_POSITION_LEFT}"]`]:
      {
        transform: "translateX(-101%)",
      },

    /** RIGHT */
    [`&[data-animation-state="${ENTERING}"][data-drawer-position="${DRAWER_POSITION_RIGHT}"]`]:
      {
        transform: "translateX(101%)",
      },
    [`&[data-animation-state="${ENTERED}"][data-drawer-position="${DRAWER_POSITION_RIGHT}"]`]:
      {
        transform: "translateX(0px)",
      },
    [`&[data-animation-state="${EXITING}"][data-drawer-position="${DRAWER_POSITION_RIGHT}"]`]:
      {
        transform: "translateX(101%)",
      },

    /** TOP */
    [`&[data-animation-state="${ENTERING}"][data-drawer-position="${DRAWER_POSITION_TOP}"]`]:
      {
        transform: "translateY(-101%)",
      },
    [`&[data-animation-state="${ENTERED}"][data-drawer-position="${DRAWER_POSITION_TOP}"]`]:
      {
        transform: "translateY(0px)",
      },
    [`&[data-animation-state="${EXITING}"][data-drawer-position="${DRAWER_POSITION_TOP}"]`]:
      {
        transform: "translateY(-101%)",
      },

    /** BOTTOM */
    [`&[data-animation-state="${ENTERING}"][data-drawer-position="${DRAWER_POSITION_BOTTOM}"]`]:
      {
        transform: "translateY(101%)",
      },
    [`&[data-animation-state="${ENTERED}"][data-drawer-position="${DRAWER_POSITION_BOTTOM}"]`]:
      {
        transform: "translateY(0px)",
      },
    [`&[data-animation-state="${EXITING}"][data-drawer-position="${DRAWER_POSITION_BOTTOM}"]`]:
      {
        transform: "translateY(101%)",
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
