import {
  BUTTON_COMPONENT_NAMESPACE,
  BUTTON_COMPONENTS_NAMES,
} from "@cheaaa/button";
import {
  CHECKBOX_COMPONENT_NAMESPACE,
  CHECKBOX_COMPONENTS_NAMES,
} from "@cheaaa/checkbox";

import { DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE } from "../src";
export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      [DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE]: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "transparent",
          paddingLeft: "20px",
          textAlign: "start",
          transformOrigin: "20%",
          "&:hover": {
            background: "transparent",
          },
        },
      },
    },
    [CHECKBOX_COMPONENT_NAMESPACE]: {
      filters: {
        [CHECKBOX_COMPONENTS_NAMES.wrapper]: {
          padding: "0px 12px",
          transformOrigin: "20%",
          "&:hover": {
            background: "#EDF4FE",
          },
        },
      },
    },
  },
};
