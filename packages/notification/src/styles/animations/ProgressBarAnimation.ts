export const progressBarKeyframes = {
  "@keyframes Toastify__trackProgress": {
    "0%": {
      transform: "scaleX(1)",
    },
    "100%": {
      transform: "scaleX(0)",
    },
  },
};

export const progressBarAnimation = {
  "& .Toastify__progress-bar--animated": {
    animation: "$Toastify__trackProgress linear 1 forwards",
  },
};
