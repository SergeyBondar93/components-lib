import {
  DATEPICKER_COMPONENTS_NAMES,
  DATEPICKER_COMPONENT_NAMESPACE,
} from "./../src";
export const theme = {
  components: {
    [DATEPICKER_COMPONENT_NAMESPACE]: {
      from: {
        [DATEPICKER_COMPONENTS_NAMES.body]: {
          left: "0px",
        },
      },
      to: {
        [DATEPICKER_COMPONENTS_NAMES.body]: {
          right: "0px",
        },
      },
    },
  },
};
