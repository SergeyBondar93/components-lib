import { ENTERING, ENTERED, EXITING } from "react-transition-group/Transition";

import { MODAL_COMPONENTS_NAMES } from "./../src/styles/consts";
import { MODAL_COMPONENT_NAMESPACE } from "./../src";

export const theme = {
  components: {
    [MODAL_COMPONENT_NAMESPACE]: {
      changedAnimation: {
        [MODAL_COMPONENTS_NAMES.modalContent]: {
          transitionProperty: "all",
          [`&[data-animation-state="${ENTERING}"]`]: {
            transform: `scale(1.8) translate(-50%, -50%)`,
          },
          [`&[data-animation-state="${ENTERED}"]`]: {
            transform: "scale(1) translate(-50%, -50%)",
          },
          [`&[data-animation-state="${EXITING}"]`]: {
            transform: `scale(1.8) translate(-50%, -50%)`,
          },
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
        [MODAL_COMPONENTS_NAMES.modalContent]: {
          borderRadius: "20px 20px 0px 0px",
          left: "0px",
          top: "inherit",
          border: "none",
          width: "100vw",
          height: "calc(100vh - 30px)",
          bottom: "0px",
          [`&[data-animation-state="${ENTERING}"]`]: {
            transform: `translateY(100%)`,
          },
          [`&[data-animation-state="${ENTERED}"]`]: {
            transform: "translateY(0%)",
          },
          [`&[data-animation-state="${EXITING}"]`]: {
            transform: `translateY(100%)`,
          },
        },
      },
    },
  },
};
