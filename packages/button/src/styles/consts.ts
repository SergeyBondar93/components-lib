export const BUTTON_COMPONENT_NAMESPACE = "@che/button";

export const ICON_BUTTON_COMPONENT_NAMESPACE = "@che/icon-button";

export const BUTTON_GROUP_COMPONENT_NAMESPACE = "@che/button-group";

export const BUTTON_COMPONENTS_NAMES = {
  /**
   * Компонент, сам html tag может быть a / span / button в зависимости от свойств.
   */
  button: "button",
} as const;

export const BUTTON_GROUP_COMPONENTS_NAMES = {
  /**
   * Обёртка над кнопками
   */
  wrapper: "wrapper",
  /**
   * Стили кнопок передаваемых в buttonGroup описываются тут
   */
  button: "button",
} as const;
