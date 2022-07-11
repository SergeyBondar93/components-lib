import {
  NOTIFICATION_COMPONENT_NAMES,
  NOTIFICATION_COMPONENT_NAMESPACE,
} from "./../src";
export const theme = {
  components: {
    [NOTIFICATION_COMPONENT_NAMESPACE]: {
      [NOTIFICATION_COMPONENT_NAMES.closeButton]: {},
      [NOTIFICATION_COMPONENT_NAMES.titleWrapper]: {
        fontSize: "18px",
      },
      [NOTIFICATION_COMPONENT_NAMES.message]: {
        fontSize: "13px",
      },
      info: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#636AFF",
        },
      },
      success: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#41CC78",
        },
      },
      warning: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#FB751C",
        },
      },
      error: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#FF6666",
        },
      },
      default: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#636AFF",
        },
      },
    },
  },
};
