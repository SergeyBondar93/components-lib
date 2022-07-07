import {
  CHECKBOX_COMPONENTS_NAMES,
  CHECKBOX_COMPONENT_NAMESPACE,
} from "./../src/styles/consts";

export const theme = {
  components: {
    [CHECKBOX_COMPONENT_NAMESPACE]: {
      big: {
        [CHECKBOX_COMPONENTS_NAMES.wrapper]: {
          height: "50px",
        },
        [CHECKBOX_COMPONENTS_NAMES.iconWrapper]: {
          width: "40px",
          height: "40px",

          "& svg": {
            width: "30px",
            height: "30px",
          },
        },
        [CHECKBOX_COMPONENTS_NAMES.label]: {
          fontSize: "25px",
        },
      },
      compare: {
        [CHECKBOX_COMPONENTS_NAMES.iconWrapper]: {
          border: "none",
          '&[data-checked="true"]': {
            backgroundColor: "transparent",
          },
        },
        [CHECKBOX_COMPONENTS_NAMES.label]: {
          marginTop: "4px",
        },
      },
    },
  },
};
