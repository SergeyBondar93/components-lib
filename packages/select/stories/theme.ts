import {
  INPUT_COMPONENT_NAMESPACE,
  INPUT_COMPONENTS_NAMES,
} from "@cheaaa/input";

import { SELECT_COMPONENTS_NAMES, SELECT_COMPONENT_NAMESPACE } from "./../src";

type Colors = {
  main: string;
  active: string;
  header: string;
  text: string;
};

export const getTheme = ({ main, active, header, text }: Colors): any => ({
  components: {
    [INPUT_COMPONENT_NAMESPACE]: {
      base: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          background: main,
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          background: main,
          color: text,
        },
      },
      countries: {
        [INPUT_COMPONENTS_NAMES.input]: {
          '&[data-focused="true"]': {
            padding: "14px",
          },
          '&[data-hasvalue="true"]': {
            padding: "14px",
          },
          '&[data-select-open="true"]': {
            padding: "14px",
          },
        },
        [INPUT_COMPONENTS_NAMES.label]: {
          '&[data-focused="true"]': {
            fontSize: "12px",
            top: "15px",
            color: "#636AFF",
          },
          '&[data-hasvalue="true"]': {
            fontSize: "12px",
            top: "15px",
          },
          '&[data-select-open="true"]': {
            fontSize: "12px",
            top: "15px",
            color: "#636AFF",
          },
        },
      },
    },
    [SELECT_COMPONENT_NAMESPACE]: {
      base: {
        [SELECT_COMPONENTS_NAMES.dropdown]: {
          background: main,
        },
        [SELECT_COMPONENTS_NAMES.groupHeader]: {
          background: header,
          color: text,
        },
        [SELECT_COMPONENTS_NAMES.listItem]: {
          background: main,
          color: text,
          '&[data-active="true"]': {
            background: active,
          },
        },
      },
      countries: {
        [SELECT_COMPONENTS_NAMES.wrapper]: {
          height: "61px",
        },
      },
    },
  },
});
