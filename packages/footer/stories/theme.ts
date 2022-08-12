import {
  ACCORDION_COMPONENTS_NAMES,
  DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE,
  ACCORDION_COMPONENT_NAMESPACE,
} from "@cheaaa/accordion";
import {
  BUTTON_COMPONENTS_NAMES,
  BUTTON_COMPONENT_NAMESPACE,
} from "@cheaaa/button";

export const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      base: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          letterSpacing: "-0.45px",
          fontWeight: 400,
          fontSize: "13px",
          background: "#636AFF",
          color: "#FFF",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.2s transform",
          "&[disabled]": {
            opacity: 0.7,
          },
          "&:hover": {
            background: "#636AFF",
          },
        },
      },
      text: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          background: "#FFF",
          color: "#636AFF",
          padding: "10px 15px",
          "&:hover": {
            background: "#FFF",
            color: "#636AFF",
          },
        },
      },
      [DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE]: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          transformOrigin: "20%",
          color: "#101820",
          background: "transparent",
          paddingLeft: "20px",
          textAlign: "start",
          alignItems: "center",
          justifyContent: "flex-start",
          "&:hover": {
            background: "transparent",
          },
        },
      },
      navigation: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          padding: "10px 0px",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          "&:active:enabled": {
            transform: "scale(1)",
          },
          color: "#101820",
          fontSize: "13px",
        },
      },
      navigationHiddenOptions: {
        [BUTTON_COMPONENTS_NAMES.button]: {
          padding: "0px 0px 0px 0px",
          color: "#636AFF",
          fontSize: "13px",
          "&:active:enabled": {
            transform: "scale(1)",
          },
        },
      },
    },
    [ACCORDION_COMPONENT_NAMESPACE]: {
      navigation: {
        [ACCORDION_COMPONENTS_NAMES.wrapper]: {
          borderTop: "1px solid rgba(113, 130, 153, 0.25)",
          "&:last-child": {
            borderBottom: "1px solid rgba(113, 130, 153, 0.25)",
          },
        },
        [ACCORDION_COMPONENTS_NAMES.childrenWrapper]: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        },
        [ACCORDION_COMPONENTS_NAMES.body]: {
          '&[data-is-opened="true"]': {
            marginBottom: "10px",
          },
        },
      },
      navigationHiddenOptions: {
        [ACCORDION_COMPONENTS_NAMES.wrapper]: {
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column-reverse",
        },
        [ACCORDION_COMPONENTS_NAMES.body]: {
          width: "100%",
          '&[data-is-opened="true"]': {
            marginBottom: "10px",
          },
        },
        [ACCORDION_COMPONENTS_NAMES.icon]: {
          display: "none",
        },
      },
    },
  },
};
