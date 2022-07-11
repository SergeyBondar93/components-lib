export * from "./Notification";
export {
  NOTIFICATION_COMPONENT_NAMES,
  NOTIFICATION_COMPONENT_NAMESPACE,
} from "./styles";
export type { NotificationTheme } from "./styles";
export * from "./notify";

import { Bounce, Flip, Slide, Zoom } from "react-toastify";
export const animationsTypes = { Bounce, Flip, Slide, Zoom } as const;
