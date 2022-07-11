export const bounceKeyframes = {
  "@keyframes Toastify__bounceInRight": {
    [`from, 60%, 75%, 90%, to`]: {
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    from: {
      opacity: 0,
      transform: "translate3d(3000px, 0, 0)",
    },
    "60%": {
      opacity: 1,
      transform: "translate3d(-25px, 0, 0)",
    },
    "75%": {
      transform: "translate3d(10px, 0, 0)",
    },
    "90%": {
      transform: "translate3d(-5px, 0, 0)",
    },
    to: {
      transform: "none",
    },
  },

  "@keyframes Toastify__bounceOutRight": {
    "20%": {
      opacity: 1,
      transform: "translate3d(-20px, 0, 0)",
    },
    to: {
      opacity: 0,
      transform: "translate3d(2000px, 0, 0)",
    },
  },

  "@keyframes Toastify__bounceInLeft": {
    [`from, 60%, 75%, 90%, to`]: {
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    "0%": {
      opacity: 0,
      transform: "translate3d(-3000px, 0, 0)",
    },
    "60%": {
      opacity: 1,
      transform: "translate3d(25px, 0, 0)",
    },
    "75%": {
      transform: "translate3d(-10px, 0, 0)",
    },
    "90%": {
      transform: "translate3d(5px, 0, 0)",
    },
    to: {
      transform: "none",
    },
  },

  "@keyframes Toastify__bounceOutLeft": {
    "20%": {
      opacity: 1,
      transform: "translate3d(20px, 0, 0)",
    },
    to: {
      opacity: 0,
      transform: "translate3d(-2000px, 0, 0)",
    },
  },

  "@keyframes Toastify__bounceInUp": {
    [`from, 60%, 75%, 90%, to`]: {
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    from: {
      opacity: 0,
      transform: "translate3d(0, 3000px, 0)",
    },
    "60%": {
      opacity: 1,
      transform: "translate3d(0, -20px, 0)",
    },
    "75%": {
      transform: "translate3d(0, 10px, 0)",
    },
    "90%": {
      transform: "translate3d(0, -5px, 0)",
    },
    to: {
      transform: "translate3d(0, 0, 0)",
    },
  },

  "@keyframes Toastify__bounceOutUp": {
    "20%": {
      transform: "translate3d(0, -10px, 0)",
    },
    [`40%, 45%`]: {
      opacity: 1,
      transform: "translate3d(0, 20px, 0)",
    },
    to: {
      opacity: 0,
      transform: "translate3d(0, -2000px, 0)",
    },
  },

  "@keyframes Toastify__bounceInDown": {
    [`from, 60%, 75%, 90%, to`]: {
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    "0%": {
      opacity: 0,
      transform: "translate3d(0, -3000px, 0)",
    },
    "60%": {
      opacity: 1,
      transform: "translate3d(0, 25px, 0)",
    },
    "75%": {
      transform: "translate3d(0, -10px, 0)",
    },
    "90%": {
      transform: "translate3d(0, 5px, 0)",
    },
    to: {
      transform: "none",
    },
  },

  "@keyframes Toastify__bounceOutDown": {
    "20%": {
      transform: "translate3d(0, 10px, 0)",
    },
    [`40%, 45%`]: {
      opacity: 1,
      transform: "translate3d(0, -20px, 0)",
    },
    to: {
      opacity: 0,
      transform: "translate3d(0, 2000px, 0)",
    },
  },
};

export const bounceAnimations = {
  [`& .Toastify__bounce-enter--top-left,
  & .Toastify__bounce-enter--bottom-left`]: {
    animationName: "$Toastify__bounceInLeft",
  },

  [`& .Toastify__bounce-enter--top-right,
  & .Toastify__bounce-enter--bottom-right`]: {
    animationName: "$Toastify__bounceInRight",
  },

  "& .Toastify__bounce-enter--top-center": {
    animationName: "$Toastify__bounceInDown",
  },

  "& .Toastify__bounce-enter--bottom-center": {
    animationName: "$Toastify__bounceInUp",
  },

  [`& .Toastify__bounce-exit--top-left,
  & .Toastify__bounce-exit--bottom-left`]: {
    animationName: "$Toastify__bounceOutLeft",
  },

  [`& .Toastify__bounce-exit--top-right,
  & .Toastify__bounce-exit--bottom-right`]: {
    animationName: "$Toastify__bounceOutRight",
  },

  "& .Toastify__bounce-exit--top-center": {
    animationName: "$Toastify__bounceOutUp",
  },

  "& .Toastify__bounce-exit--bottom-center": {
    animationName: "$Toastify__bounceOutDown",
  },
};
