import {
  INPUT_COMPONENT_NAMESPACE,
  INPUT_COMPONENTS_NAMES,
} from "@cheaaa/input";

export const theme = {
  components: {
    [INPUT_COMPONENT_NAMESPACE]: {
      select: {
        [INPUT_COMPONENTS_NAMES.label]: {
          // transition: 'none'
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          // transition: 'none'
          // "&:not(:focus)::placeholder": {
          //   opacity: 1,
          // },
        },
      },

      focused: {},
    },
  },
};
