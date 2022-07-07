import color from "color";

import {
  BUTTON_COMPONENT_NAMESPACE,
  BUTTON_COMPONENTS_NAMES,
  BUTTON_GROUP_COMPONENT_NAMESPACE,
  BUTTON_GROUP_COMPONENTS_NAMES,
} from "./../src";

export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      base: {
        [BUTTON_COMPONENTS_NAMES.button]: {
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
        [BUTTON_COMPONENTS_NAMES.button]: {
          padding: "5px",
          fontWeight: 600,
          fontSize: "10px",
        },
      },
      big: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          padding: "15px",
        },
      },
      primary: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "#636AFF",
          color: "#FFF",
          "&:hover:enabled": {
            background: color("#636AFF").darken(0.1).toString(),
          },
        },
      },
      secondary: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "#EDF4FE",
          color: "#636AFF",
          "&:hover:enabled": {
            background: color("#EDF4FE").darken(0.1).toString(),
            color: color("#636AFF").darken(0.1).toString(),
          },
        },
      },
      success: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "#41CC78",
          color: "#FFF",
          "&:hover:enabled": {
            background: color("#41CC78").darken(0.1).toString(),
          },
        },
      },
      warn: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "#FFECEC",
          color: "#FF6666",
          "&:hover:enabled": {
            background: color("#FFECEC").darken(0.1).toString(),
            color: color("#FF6666").darken(0.1).toString(),
          },
        },
      },
      dander: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "#FF6666",
          color: "#FFF",
          "&:hover:enabled": {
            background: color("#FF6666").darken(0.1).toString(),
          },
        },
      },
    },
    [BUTTON_GROUP_COMPONENT_NAMESPACE]: {
      base: {
        [BUTTON_GROUP_COMPONENTS_NAMES.wrapper]: {},
      },
      gender: {
        [BUTTON_GROUP_COMPONENTS_NAMES.button]: {
          "&:first-of-type": {
            borderRadius: "10px 0px 0px 10px",
            borderRight: "none",
          },
          "&:last-of-type": {
            borderRadius: "0px 10px 10px 0px",
          },
          height: "48px",
          width: "120px",
          color: "#718299",
          opacity: 0.7,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "0px",
          marginBottom: "0px",
          padding: "0px",
          borderRadius: "0px",
          border: "1px solid #718299",

          "& svg": {
            fill: "#718299",
            marginRight: "8px",
          },
          "&:active:enabled": {
            transform: "none",
          },
          "&:hover": {
            background: "transparent",
            opacity: 1,
          },
          '&[data-selected="true"]': {
            "& svg": {
              fill: "#636AFF",
            },
            color: "#636AFF",
            background: "transparent",
            opacity: 1,
          },
        },
      },
      currencies: {
        [BUTTON_GROUP_COMPONENTS_NAMES.button]: {
          color: "#636AFF",
          marginRight: "0px",
          marginBottom: "0px",
          padding: "5px",
          border: "none",
          "&:hover": {
            background: "transparent",
            opacity: 0.8,
            color: "#636AFF",
          },
          '&[data-selected="true"]': {
            background: "transparent",
            opacity: 0.6,
            color: "#636AFF",
          },
        },
      },
    },
  },
};
