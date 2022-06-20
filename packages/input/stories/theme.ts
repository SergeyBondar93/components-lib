import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_COMPONENT_NAMESPACE,
} from "@cheaaa/button/src";

import {
  INPUT_COMPONENT_NAMESPACE,
  INPUT_COMPONENTS_NAMES,
  CODE_INPUT_COMPONENT_NAMESPACE,
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

      visiblePlaceholder: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          '&[data-focused="true"]': {
            alignItems: "center",
          },
          '&[data-hasvalue="true"]': {
            alignItems: "center",
          },
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          padding: "12px",
          '&[data-focused="true"]': {
            padding: "12px",
          },
          '&[data-hasvalue="true"]': {
            padding: "12px",
          },
          "&:not(:focus)::placeholder": {
            opacity: 1,
          },
        },
      },

      card: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          height: "41px",
        },
      },
      promocode: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          width: "291px",
          borderRadius: "0px",
          border: "none",
          borderBottom: "1px solid #636AFF",
          height: "35px",
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
          padding: "8px",
          paddingLeft: "0px",
          borderRadius: "0px",
          '&[data-focused="true"]': {
            padding: "8px",
            paddingLeft: "0px",
          },
          '&[data-hasvalue="true"]': {
            padding: "8px",
            paddingLeft: "0px",
          },
        },
        [INPUT_COMPONENTS_NAMES.postfixWrapper]: {
          marginRight: 0,
        },
      },
    },
    [CODE_INPUT_COMPONENT_NAMESPACE]: {
      base: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          borderRadius: "0px",
          border: "none",
          borderBottom: "3px solid rgba(113, 130, 153, 0.25)",
          width: "25px",
          height: "35px",
          margin: "3px",
          '&[data-invalid="true"]': {
            border: "none",
            borderBottom: "3px solid #FF6666",
            animation: "none",
          },
          '&[data-valid="true"]': {
            border: "none",
            borderBottom: "3px solid #2CA95E",
          },
          '&[data-focused="true"]': {
            border: "none",
            borderBottom: "3px solid #636AFF",
          },
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          fontSize: "20px",
        },
      },
    },
  },
};
