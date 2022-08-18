import { ComponentTheme } from "@cheaaa/theme";

import { SKELETON_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [SKELETON_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "7px",
    display: "block",
    backgroundRepeat: "no-repeat",

    animation: "$skeletonLoading 1.5s infinite linear",

    '&[data-animated="true"]': {
      background:
        "linear-gradient(0.25turn, transparent, #FFF, transparent), linear-gradient(rgba(113, 130, 153, 0.12), rgba(113, 130, 153, 0.12))",
    },

    '&[data-animated="false"]': {
      animation: "",
      background:
        "linear-gradient(0deg, rgba(113, 130, 153, 0.08), rgba(113, 130, 153, 0.08)), #FFFFFF",
    },
  },
};
