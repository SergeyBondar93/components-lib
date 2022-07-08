import {
  BUTTON_COMPONENT_NAMESPACE,
  BUTTON_COMPONENTS_NAMES,
} from "@cheaaa/button";
import {
  CHECKBOX_COMPONENT_NAMESPACE,
  CHECKBOX_COMPONENTS_NAMES,
} from "@cheaaa/checkbox";
export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      "accordion-title": {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "transparent",
          paddingLeft: "20px",
          textAlign: "start",
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
          "&:hover": {
            background: "#EDF4FE",
          },
        },
      },
    },
  },
};
