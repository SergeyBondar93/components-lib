import { ComponentTheme } from "@cheaaa/theme";

import { DROPDOWN_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [DROPDOWN_COMPONENTS_NAMES.wrapper]: {
    position: "relative",
    minWidth: "140px",
    display: "inline-block",
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
  },
  [DROPDOWN_COMPONENTS_NAMES.icon]: {
    display: "none",
    transition: "0.2s",
    fill: "#718299",
    '&[data-is-open="true"]': {
      transform: "rotate(90deg)",
    },
  },
  [DROPDOWN_COMPONENTS_NAMES.body]: {
    position: "absolute",
    zIndex: 3,
    background: "#FFF",
    maxHeight: "fit-content",
    boxShadow: "0 2px 12px rgb(0 0 0 / 15%)",
    borderRadius: "0px 0px 12px 12px",

    overflow: "hidden",

    transition: "0.5s",
    transitionProperty: "transform, opacity",
    opacity: 0,
    '&[data-is-opened="fasle"]': {
      transform: "translateY(-20px)",
    },
    '&[data-is-opened="true"]': {
      opacity: 1,
      transform: "translateY(10px)",
      overflow: "initial",
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#485B75",
    },
  },
  /**
   * для отступа внутри children для правильного
   * высчитывания размеров блока необходимо добавлять padding к children
   */
  [DROPDOWN_COMPONENTS_NAMES.childrenWrapper]: {},
};
