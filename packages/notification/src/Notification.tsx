import { ToastContainer } from "react-toastify";

import { useStyles } from "./styles/styles";

export const Notification = () => {
  const classes = useStyles();

  return <ToastContainer className={classes.root} />;
};
