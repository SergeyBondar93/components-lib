export const CHECKBOX_COMPONENT_NAMESPACE = "@che/checkbox";
export const SWITCH_COMPONENT_NAMESPACE = "@che/switch";

export const CHECKBOX_COMPONENTS_NAMES = {
  /**
   * Обёртка над CheckboxGroup
   */
  groupWrapper: "groupWrapper",

  /**
   * Обёртка над чекбоксом - label
   */
  wrapper: "wrapper",

  /**
   * Скрытый инпут
   */
  input: "input",

  /**
   * Обёртка над иконкой
   */
  iconWrapper: "iconWrapper",

  /**
   * Label текст
   */
  label: "label",
} as const;

export const SWITCHER_COMPONENTS_NAMES = {
  /**
   * Обёртка над чекбоксом - label
   */
  wrapper: "wrapper",

  /**
   * Скрытый инпут
   */
  input: "input",

  /**
   * Обёртка над иконкой
   */
  iconWrapper: "iconWrapper",

  /**
   * Сам компонент переключения (по умолчанию - зелёный/красный кружёк)
   */
  toggler: "toggler",

  /**
   * Label текст
   */
  label: "label",
} as const;
