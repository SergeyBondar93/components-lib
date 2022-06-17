import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_COMPONENT_NAMESPACE,
} from "@cheaaa/button/src";

import {
  INPUT_COMPONENT_NAMESPACE,
  INPUT_COMPONENTS_NAMES,
} from "./../src/styles/consts";

export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      promo: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#FFF",
          padding: 0,
          color: "#636AFF",
          "&[disabled]": {
            opacity: 1,
          },
          "&:hover": {
            background: "#FFF",
          },
        },
      },
      promoSuccess: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          color: "#2CA95E",
        },
      },
    },
    [INPUT_COMPONENT_NAMESPACE]: {
      base: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {},
      },
      main: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {},
      },
      promocode: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          width: "291px",
          borderRadius: "0px",
          border: "none",
          borderBottom: "1px solid #636AFF",
          '&[data-focused="true"]': {
            border: "none",
            borderBottom: "1px solid #636AFF",
          },
          '&[data-invalid="true"]': {
            border: "none",
            borderBottom: "1px solid #FF6666",
          },
          '&[data-valid="true"]': {
            border: "none",
            borderBottom: "1px solid #2CA95E",
          },
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          paddingLeft: "0px",
          borderRadius: "0px",
        },
        [INPUT_COMPONENTS_NAMES.postfixWrapper]: {
          marginRight: 0,
        },
      },
    },
  },
};
