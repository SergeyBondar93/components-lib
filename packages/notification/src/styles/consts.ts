export const NOTIFICATION_COMPONENT_NAMES = {
  /* стили описываются для типа нотификации 
      {info success warning error default} */
  toast: "toast",
  progressBar: "progressBar",

  /* стили описываются для всех типов */
  closeButton: "closeButton",
  titleWrapper: "titleWrapper",
  title: "title",
  message: "message",
} as const;

export const NOTIFICATION_COMPONENT_NAMESPACE = `@che/notification`;

export const NOTIFICATION_WIDTH = 464;
