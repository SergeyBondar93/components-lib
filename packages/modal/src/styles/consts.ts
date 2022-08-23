export const DEFAULT_ANIMATION_DURATION = 300;

export const MODAL_COMPONENT_NAMESPACE = `@che/modal`;

export const MODAL_COMPONENTS_NAMES = {
  /**
   * Обёртка над всем
   */
  modalContent: `modalContent`,

  /**
   * Заголовок модалки включающий title и кнопку закрытия
   */
  headerWrapper: `headerWrapper`,

  /**
   * Обёртка над title
   */
  titleWrapper: `titleWrapper`,

  /**
   * Кнопка закрытия
   */
  closeButton: `closeButton`,

  /**
   * Обёртка над children
   */
  childrenWrapper: `childrenWrapper`,
} as const;
