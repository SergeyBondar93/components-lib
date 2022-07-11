export const zoomKeyframes = {
  "@keyframes Toastify__zoomIn": {
    from: {
      opacity: 0,
      transform: "scale3d(0.3, 0.3, 0.3)",
    },
    "50%": {
      opacity: 1,
    },
  },

  "@keyframes Toastify__zoomOut": {
    from: {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
      transform: "scale3d(0.3, 0.3, 0.3)",
    },
    to: {
      opacity: 0,
    },
  },
};

export const zoomAnimations = {
  "& > .Toastify__zoom-enter": {
    animationName: "$Toastify__zoomIn",
  },

  "& > .Toastify__zoom-exit": {
    animationName: "$Toastify__zoomOut",
  },
};
