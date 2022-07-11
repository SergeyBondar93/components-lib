import { ToastTransition, TypeOptions } from "react-toastify";
import { ThemeProvider } from "react-jss";

import { animationsTypes, Notification, notify } from "../src";

import { theme } from "./theme";

export default {
  title: "Notification",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Notification />
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Button = ({ onClick, children }: any) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export const Types = () => {
  const handleShowNotification = (type: TypeOptions) => () => {
    notify[type]({
      title: "Невозможно застраховать такой возраст",
      message:
        "Выбранный страховой продукт не может быть расчитан при данных условиях",
    });
  };

  return (
    <>
      <Button onClick={handleShowNotification("default")}> Default </Button>
      <Button onClick={handleShowNotification("info")}> Info </Button>
      <Button onClick={handleShowNotification("success")}> Success </Button>
      <Button onClick={handleShowNotification("warning")}> Warning </Button>
      <Button onClick={handleShowNotification("error")}> Error </Button>
    </>
  );
};

export const Animations = () => {
  const handleShowNotification = (transition: ToastTransition) => () => {
    notify.default({
      title: "Невозможно застраховать такой возраст",
      message:
        "Выбранный страховой продукт не может быть расчитан при данных условиях",
      transition,
    });
  };

  return (
    <>
      <Button onClick={handleShowNotification(animationsTypes.Bounce)}>
        Bounce
      </Button>
      <Button onClick={handleShowNotification(animationsTypes.Flip)}>
        Flip
      </Button>
      <Button onClick={handleShowNotification(animationsTypes.Slide)}>
        Slide
      </Button>
      <Button onClick={handleShowNotification(animationsTypes.Zoom)}>
        Zoom
      </Button>
    </>
  );
};
