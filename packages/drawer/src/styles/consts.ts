import { MODAL_COMPONENTS_NAMES } from "@cheaaa/modal";

export const DEFAULT_ANIMATION_DURATION = 300;

export const DRAWER_COMPONENT_NAMESPACE = `@che/drawer`;

export const DRAWER_COMPONENTS_NAMES = {
  ...MODAL_COMPONENTS_NAMES,
} as const;

export const DRAWER_POSITION_LEFT = "left";
export const DRAWER_POSITION_RIGHT = "right";
export const DRAWER_POSITION_TOP = "top";
export const DRAWER_POSITION_BOTTOM = "bottom";

export const DRAWER_STYLES_BY_POSITION = {
  left: {
    modalContent: {
      top: "0px",
      left: "0px",
      height: "100vh",
      width: "200px",
    },
  },
  right: {
    modalContent: {
      top: "0px",
      right: "0px",
      height: "100vh",
      width: "200px",
    },
  },
  top: {
    modalContent: {
      top: "0px",
      width: "100vw",
      height: "200px",
    },
  },
  bottom: {
    modalContent: {
      bottom: "0px",
      width: "100vw",
      height: "200px",
    },
  },
};
