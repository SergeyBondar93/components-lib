import { ComponentTheme } from "@cheaaa/theme";

import { SKELETON_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [SKELETON_COMPONENTS_NAMES.wrapper]: {
    borderRadius: "7px",
    display: "block",
    backgroundRepeat: "no-repeat",

    animation: "$skeletonLoading 1.5s infinite",

    '&[data-animated="true"]': {
      background:
        "linear-gradient(90.23deg, rgba(113, 130, 153, 0.12) 40.63%, rgba(113, 130, 153, 0) 51.56%, rgba(113, 130, 153, 0.12) 62.5%), #FFFFFF",
    },

    '&[data-animated="false"]': {
      animation: "",
      background:
        "linear-gradient(0deg, rgba(113, 130, 153, 0.08), rgba(113, 130, 153, 0.08)), #FFFFFF",
    },
  },
};
