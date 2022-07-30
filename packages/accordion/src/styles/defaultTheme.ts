import { ComponentTheme } from "@cheaaa/theme";

import { ACCORDION_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [ACCORDION_COMPONENTS_NAMES.wrapper]: {
    width: "fit-content",
    '&[data-shouldfitcontent="true"]': {
      width: "100%",
    },
  },
  [ACCORDION_COMPONENTS_NAMES.icon]: {
    marginRight: "14px",
    transition: "0.2s",
    fill: "#718299",
    '&[data-is-open="true"]': {
      transform: "rotate(90deg)",
    },
  },
  [ACCORDION_COMPONENTS_NAMES.body]: {
    position: "relative",
    overflow: "hidden",
    '&[data-is-opened="true"]': {
      overflow: "initial",
    },
  },
  /**
   * для отступа внутри children для правильного
   * высчитывания размеров блока необходимо добавлять padding к children
   */
  [ACCORDION_COMPONENTS_NAMES.childrenWrapper]: {},
};
