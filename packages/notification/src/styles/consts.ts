export const NOTIFICATION_COMPONENT_NAMES = {
  /* стили описываются для типа нотификации 
      {info success warning error default} */

  /**
   * Обёртка над уведомлением
   */
  toast: "toast",

  /**
   * Полоса времени до закрытия
   */
  progressBar: "progressBar",

  /* стили описываются для всех типов */

  /**
   * Иконка закрытия
   */
  closeButton: "closeButton",

  /**
   * Обёртка над иконкой + title
   */
  titleWrapper: "titleWrapper",

  /**
   * Обёртка над title
   */
  title: "title",

  /**
   * Обёртка над message
   */
  message: "message",
} as const;

export const NOTIFICATION_COMPONENT_NAMESPACE = `@che/notification`;

export const NOTIFICATION_WIDTH = 464;
