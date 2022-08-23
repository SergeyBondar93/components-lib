export const SELECT_COMPONENT_NAMESPACE = `@che/select`;

export const SELECT_COMPONENTS_NAMES = {
  /**
   * Обёртка над всем
   */
  wrapper: `wrapper`,

  /**
   * Иконка открытия / закрытия
   */
  icon: `icon`,

  /**
   * Обёртка над dropdown
   */
  dropdown: `dropdown`,

  /**
   * Обёртка над группами выбрано / не выбрано
   */
  groupWrapper: "groupWrapper",

  /**
   * Обёртка над заголовком группы
   */
  groupHeader: "groupHeader",

  /**
   * Обёртка над списком опций в группе
   */
  list: "list",

  /**
   * Элемент списка опций
   */
  listItem: "listItem",

  /**
   * Обёртка над иконкой удаления опции
   */
  removeIconWrapper: "removeIconWrapper",

  /**
   * Обёртка над сообщением об отсутствии опций
   */
  noOptionsMessage: "noOptionsMessage",
} as const;

/**
 * Аппиранс для инпута по умолчанию
 */
export const DEFAULT_SELECT_INPUT_APPEARANCE = "select-input";
