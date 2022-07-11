import { NOTIFICATION_WIDTH } from "../consts";
export const container = {
  "&.Toastify__toast-container": {
    zIndex: 9999,
    transform: "translate3d(0, 0, 9999px)",
    position: "fixed",
    width: `${NOTIFICATION_WIDTH}px`,
    boxSizing: "border-box",
    color: "#fff",
  },
  "&.Toastify__toast-container--top-left": {
    top: "15px",
    left: "15px",
  },

  "&.Toastify__toast-container--top-center": {
    top: "15px",
    left: "50%",
    marginLeft: "-160px",
  },

  "&.Toastify__toast-container--top-right": {
    top: "15px",
    right: "15px",
  },

  "&.Toastify__toast-container--bottom-left": {
    bottom: "0px",
    left: "15px",
  },

  "&.Toastify__toast-container--bottom-center": {
    bottom: "0px",
    left: "50%",
    marginLeft: "-160px",
  },

  "&.Toastify__toast-container--bottom-right": {
    bottom: "0px",
    right: "15px",
  },

  "&.Toastify__toast:last-child": {
    marginBottom: 0,
  },

  "@media only screen and (max-width: 480px)": {
    "&.Toastify__toast-container": {
      width: "100vw",
      padding: 0,
      left: 0,
      margin: 0,
    },

    [`&.Toastify__toast-container--top-left,
    &.Toastify__toast-container--top-center,
    &.Toastify__toast-container--top-right`]: {
      top: 0,
    },

    [`&.Toastify__toast-container--bottom-left,
    &.Toastify__toast-container--bottom-center,
    &.Toastify__toast-container--bottom-right`]: {
      bottom: 0,
    },

    ".Toastify__toast-container--rtl": {
      right: 0,
      left: "initial",
    },
  },
};
