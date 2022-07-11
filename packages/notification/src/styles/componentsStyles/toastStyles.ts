export const toast = {
  "& > .Toastify__toast": {
    position: "relative",
    minHeight: "64px",
    boxSizing: "border-box",
    marginBottom: "1rem",
    padding: "12px 15px 15px 15px",
    borderRadius: "15px",
    boxShadow:
      "0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05)",
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "800px",
    overflow: "hidden",
    fontFamily: "sans-serif",
    cursor: "pointer",
    direction: "ltr",
  },

  "& > .Toastify--animate": {
    animationFillMode: "both",
    animationDuration: "0.7s",
  },

  "& > .Toastify__toast--rtl": {
    direction: "rtl",
  },

  "@media only screen and (max-width: 480px)": {
    "& > .Toastify__toast": {
      marginBottom: 0,
    },
  },
};
