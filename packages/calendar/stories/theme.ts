import { INPUT_COMPONENTS_NAMES } from "@cheaaa/input";

import { INPUT_COMPONENT_NAMESPACE } from "./../../input/src/styles/consts";
import {
  DATEPICKER_COMPONENTS_NAMES,
  DATEPICKER_COMPONENT_NAMESPACE,
} from "./../src";
export const theme = {
  components: {
    [INPUT_COMPONENT_NAMESPACE]: {
      "header-filters": {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          borderRadius: "0px",
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          fontSize: "14px",
          '&[data-focused="true"]': {
            padding: "12px 14px 12px 14px",
          },
          '&[data-hasvalue="true"]': {
            padding: "12px 14px 12px 14px",
          },
          '&[data-component-active="true"]': {
            padding: "12px 14px 12px 14px",
          },
          "&::placeholder": {
            overflow: "hidden",
            whiteSpace: "nowrap",
          },
        },
        [INPUT_COMPONENTS_NAMES.label]: {
          fontSize: "14px",
          '&[data-focused="true"]': {
            fontSize: "12px",
            top: "18px",
            color: "#636AFF",
          },
          '&[data-hasvalue="true"]': {
            fontSize: "12px",
            top: "18px",
          },
          '&[data-component-active="true"]': {
            fontSize: "12px",
            top: "18px",
            color: "#636AFF",
          },
        },
        [INPUT_COMPONENTS_NAMES.postfixWrapper]: {
          marginRight: "20px",
        },
      },
    },
    [DATEPICKER_COMPONENT_NAMESPACE]: {
      "header-filters": {
        [DATEPICKER_COMPONENTS_NAMES.wrapper]: {
          height: "61px",
        },
      },
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
