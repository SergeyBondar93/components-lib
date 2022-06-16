import color from "color";

import {
  BUTTON_COMPONENT_NAMESPACE,
  BUTTON_COMPONENTS_NAMES,
} from "./../src/styles/consts";

export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      base: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          fontWeight: 900,
          background: "lightgreen",
          color: "#FFF",
          borderRadius: "5px",
          "&[disabled]": {
            opacity: 0.7,
          },
        },
      },
      small: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          padding: "5px",
          fontWeight: 600,
          fontSize: "10px",
        },
      },
      big: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          padding: "15px",
        },
      },
      primary: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#636AFF",
          color: "#FFF",
          "&:hover": {
            background: color("#636AFF").darken(0.1).toString(),
          },
        },
      },
      secondary: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#EDF4FE",
          color: "#636AFF",
          "&:hover": {
            background: color("#EDF4FE").darken(0.1).toString(),
            color: color("#636AFF").darken(0.1).toString(),
          },
        },
      },
      success: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#41CC78",
          color: "#FFF",
          "&:hover": {
            background: color("#41CC78").darken(0.1).toString(),
          },
        },
      },
      warn: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#FFECEC",
          color: "#FF6666",
          "&:hover": {
            background: color("#FFECEC").darken(0.1).toString(),
            color: color("#FF6666").darken(0.1).toString(),
          },
        },
      },
      dander: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#FF6666",
          color: "#FFF",
          "&:hover": {
            background: color("#FF6666").darken(0.1).toString(),
          },
        },
      },
    },
  },
};
