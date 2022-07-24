import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_COMPONENT_NAMESPACE,
} from "@cheaaa/button";
import color from "color";

import {
  DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE,
  DROPDOWN_COMPONENTS_NAMES,
  DROPDOWN_COMPONENT_NAMESPACE,
} from "./../src/styles/consts";
export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      [DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE]: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          textAlign: "start",
          color: "#636AFF",
          background: "#E6EAFC",
          "&:hover": {
            background: "#E6EAFC",
            color: color("#636AFF").darken(0.3),
          },
        },
      },
      "header-add-tourist": {
        [BUTTON_COMPONENTS_NAMES.button]: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
          color: "#FFF",
          background: "#636AFF",
          "&:hover": {
            background: "#636AFF",
          },
        },
      },
      age: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          padding: "8px 8px 8px 8px",
          background: "#FFF",
          color: "rgb(16, 24, 32)",
          "&:hover": {
            color: "#636AFF",
            // brand.light
            background: "#EDF4FE",
          },
        },
      },
    },
    [DROPDOWN_COMPONENT_NAMESPACE]: {
      "header-add-tourist": {
        [DROPDOWN_COMPONENTS_NAMES.icon]: {
          display: "inline-block",
          fill: "#FFF",
          '&[data-is-open="true"]': {
            transform: "rotate(90deg)",
          },
        },
      },
    },
  },
};
