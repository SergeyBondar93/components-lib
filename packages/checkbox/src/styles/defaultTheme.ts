import { ComponentTheme } from "@cheaaa/theme";

import { CHECKBOX_COMPONENTS_NAMES, SWITCHER_COMPONENTS_NAMES } from "./consts";
import { CheckboxComponentNames, SwitcherComponentNames } from "./types";

export const defaultCheckboxTheme: Required<
  ComponentTheme<CheckboxComponentNames>
> = {
  [CHECKBOX_COMPONENTS_NAMES.groupWrapper]: {
    display: "flex",
    flexDirection: "column",
  },
  [CHECKBOX_COMPONENTS_NAMES.wrapper]: {
    height: "30px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    transition: "0.2s",
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.7,
    },
    '&:active[data-disabled="false"]': {
      transform: "scale(0.97)",
    },
  },
  [CHECKBOX_COMPONENTS_NAMES.input]: {
    display: "none",
  },
  [CHECKBOX_COMPONENTS_NAMES.iconWrapper]: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "1px solid rgba(113, 130, 153, 0.45)",
    backgroundColor: "#FFF",
    width: "20px",
    height: "20px",
    transition: "0.2s",

    '&[data-checked="true"]': {
      backgroundColor: "#636AFF",
    },
  },
  [CHECKBOX_COMPONENTS_NAMES.label]: {
    marginLeft: "8px",
  },
};

export const defaultSwitchTheme: Required<
  ComponentTheme<SwitcherComponentNames>
> = {
  [SWITCHER_COMPONENTS_NAMES.groupWrapper]: defaultCheckboxTheme.groupWrapper,
  [SWITCHER_COMPONENTS_NAMES.wrapper]: defaultCheckboxTheme.wrapper,
  [SWITCHER_COMPONENTS_NAMES.input]: defaultCheckboxTheme.wrapper,
  [SWITCHER_COMPONENTS_NAMES.iconWrapper]: {
    ...defaultCheckboxTheme.iconWrapper,
    width: "40px",
    transition: "0.2s",
    position: "relative",
  },
  [SWITCHER_COMPONENTS_NAMES.toggler]: {
    height: "18px",
    width: "18px",
    borderRadius: "50%",
    position: "absolute",
    transition: "0.2s",
    left: "1px",
    backgroundColor: "#FF6666",

    '&[data-checked="true"]': {
      left: "calc(100% - 1px)",
      transform: "translateX(-100%)",
      backgroundColor: "#41CC78",
    },
  },
  [SWITCHER_COMPONENTS_NAMES.label]: defaultCheckboxTheme.label,
};
