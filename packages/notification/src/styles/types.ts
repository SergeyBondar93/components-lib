import { Styles } from "@cheaaa/theme";
import { TypeOptions } from "react-toastify";

import { NOTIFICATION_COMPONENT_NAMES } from "./consts";

export type ComponentNames =
  typeof NOTIFICATION_COMPONENT_NAMES[keyof typeof NOTIFICATION_COMPONENT_NAMES];

type TypedToastComponents = Extract<ComponentNames, "toast" | "progressBar">;

type CommonToastComponents = Extract<
  ComponentNames,
  "closeButton" | "titleWrapper" | "title" | "message"
>;

export type NotificationTheme = {
  [ComponentName in CommonToastComponents]?: Styles;
} & {
  [Type in TypeOptions]?: {
    [ComponentName in TypedToastComponents]?: Styles;
  };
};
