import { Icon } from "./Icon";

interface INotificationBodyProps {
  title: string | JSX.Element;
  message?: string | JSX.Element;
}

export const NotificationBody = ({
  title,
  message,
}: INotificationBodyProps) => {
  return (
    <>
      <div className={"Toastify__toast-title-wrapper"}>
        <Icon />
        <span className={"Toastify__toast-title"}>{title}</span>
      </div>
      <div className={"Toastify__toast-message"}>{message}</div>
    </>
  );
};
