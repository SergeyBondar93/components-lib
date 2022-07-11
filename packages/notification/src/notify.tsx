import { Slide, toast, ToastOptions, TypeOptions } from "react-toastify";

import { NotificationBody } from "./NotificationBody";

type NotifyParams = {
  title: string | JSX.Element;
  message?: string | JSX.Element;
} & ToastOptions;

const notice =
  (type: TypeOptions) =>
  ({
    title,
    message,
    position = "bottom-left",
    autoClose = 5000,
    transition = Slide,
    ...params
  }: NotifyParams) => {
    toast(<NotificationBody title={title} message={message} />, {
      icon: <></>,
      position,
      autoClose,
      transition,
      type,
      ...params,
    });
  };

export const notify = {
  info: notice("info"),
  success: notice("success"),
  warning: notice("warning"),
  error: notice("error"),
  default: notice("default"),
} as const;
