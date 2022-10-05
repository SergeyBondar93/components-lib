import color from "color";

import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_COMPONENT_NAMESPACE,
  ICON_BUTTON_COMPONENT_NAMESPACE,
} from "@cheaaa/button";

import {
  DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE,
  DROPDOWN_COMPONENTS_NAMES,
  DROPDOWN_COMPONENT_NAMESPACE,
} from "./../src/styles/consts";
export const theme = {
  components: {
    [ICON_BUTTON_COMPONENT_NAMESPACE]: {
      inButton: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          padding: "13px 13px",
        },
      },
    },
    [BUTTON_COMPONENT_NAMESPACE]: {
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
      withIconButton: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 0px 0px 13px",
          alignItems: "center",
          minHeight: "36px",
        },
      },
      [DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE]: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
          color: "#FFF",
          background: "#636AFF",
          padding: "10px 16px 10px 13px",
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

          '&[data-selected="true"]': {
            color: "#636AFF",
            background: "#EDF4FE",
          },
        },
      },
    },
    [DROPDOWN_COMPONENT_NAMESPACE]: {
      tourists: {
        [DROPDOWN_COMPONENTS_NAMES.body]: {
          width: "216px",
        },
        [DROPDOWN_COMPONENTS_NAMES.childrenWrapper]: {
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "0px",
        },
      },
      "tourists-age": {
        [DROPDOWN_COMPONENTS_NAMES.body]: {
          width: "86px",
          borderRadius: "12px",
          right: "0px",
          maxHeight: "200px",
          overflow: "auto",
          '&[data-is-opened="true"]': {
            overflow: "auto",
          },
        },
      },
      "new-tourist": {
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
