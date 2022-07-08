import {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  UNMOUNTED,
} from "react-transition-group/Transition";

import { MODAL_COMPONENTS_NAMES } from "./../src/styles/consts";
import { MODAL_COMPONENT_NAMESPACE } from "./../src";

export const theme = {
  components: {
    [MODAL_COMPONENT_NAMESPACE]: {
      changedAnimation: {
        [ENTERING]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: `scale(1.8) translate(-50%, -50%)`,
          },
        },
        [ENTERED]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: "scale(1) translate(-50%, -50%)",
          },
        },
        [EXITING]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: `scale(1.8) translate(-50%, -50%)`,
          },
        },
        [EXITED]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: `scale(1.8) translate(-50%, -50%)`,
          },
        },
        [UNMOUNTED]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: "scale(1) translate(-50%, -50%)",
          },
        },
        [MODAL_COMPONENTS_NAMES.modalContent]: {
          transitionProperty: "all",
        },
      },
      fullScreen: {
        [MODAL_COMPONENTS_NAMES.modalContent]: {
          border: "none",
          width: "100vw",
          height: "100vh",
        },
      },
      likeMobile: {
        [ENTERING]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: `translateY(100%)`,
          },
        },
        [ENTERED]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: "translateY(0%)",
          },
        },
        [EXITING]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: `translateY(100%)`,
          },
        },
        [EXITED]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: `translateY(100%)`,
          },
        },
        [UNMOUNTED]: {
          [MODAL_COMPONENTS_NAMES.modalContent]: {
            transform: "translateY(0%)",
          },
        },
        [MODAL_COMPONENTS_NAMES.modalContent]: {
          borderRadius: "20px 20px 0px 0px",
          left: "0px",
          top: "inherit",
          border: "none",
          width: "100vw",
          height: "calc(100vh - 30px)",
          bottom: "0px",
        },
      },
    },
  },
};
