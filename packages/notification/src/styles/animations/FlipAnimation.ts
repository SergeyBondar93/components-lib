export const flipKeyframes = {
  "@keyframes Toastify__flipIn": {
    from: {
      transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
      animationTimingFunction: "ease-in",
      opacity: 0,
    },
    "40%": {
      transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
      animationTimingFunction: "ease-in",
    },
    "60%": {
      transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
      opacity: 1,
    },
    "80%": {
      transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)",
    },
    to: {
      transform: "perspective(400px)",
    },
  },

  "@keyframes Toastify__flipOut": {
    from: {
      transform: "perspective(400px)",
    },
    "30%": {
      transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
      opacity: 1,
    },
    to: {
      transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
      opacity: 0,
    },
  },
};

export const flipAnimations = {
  "& .Toastify__flip-enter": {
    animationName: "$Toastify__flipIn",
  },

  "& .Toastify__flip-exit": {
    animationName: "$Toastify__flipOut",
  },
};
