import { ComponentTheme } from "@cheaaa/theme";

import { ACCORDION_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [ACCORDION_COMPONENTS_NAMES.wrapper]: {},
  [ACCORDION_COMPONENTS_NAMES.title]: {},
  [ACCORDION_COMPONENTS_NAMES.icon]: {
    marginRight: "14px",
    transition: "0.2s",

    '&[data-is-open="true"]': {
      transform: "rotate(90deg)",
    },
  },
  [ACCORDION_COMPONENTS_NAMES.body]: {
    position: "relative",
  },
  [ACCORDION_COMPONENTS_NAMES.childrenWrapper]: {},
};
