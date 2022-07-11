export const progressBar = {
  "& .Toastify__progress-bar": {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "5px",
    zIndex: 9999,
    opacity: 0.7,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    transformOrigin: "left",
  },

  "& .Toastify__progress-bar--controlled": {
    transition: "transform 0.2s",
  },

  "& .Toastify__progress-bar--rtl": {
    right: 0,
    left: "initial",
    transformOrigin: "right",
  },
};
