export const HEADER_COMPONENT_NAMESPACE = "@che/header";

export const HEADER_COMPONENTS_NAMES = {
  /**
   * Обёртка над всеми компонентами хедера
   */
  headerWrapper: "headerWrapper",

  /**
   * Обёртка над компонентами справа
   * (почему всё новое, аккаунт, контакты, меню)
   */
  menus: "menus",

  /**
   * Ссылка с лого Cherehapa
   */
  mainLogo: "mainLogo",

  /**
   * Кнопка почему всё новое
   */
  whyNew: "whyNew",

  /**
   * Ul дропдауна контактов
   */
  contactsList: "contactsList",

  /**
   * Li дропдауна контактов
   */
  contactsListItem: "contactsListItem",

  /**
   * Ссылка в Item контакта (телефон, email)
   */
  contactsListItemLink: "contactsListItemLink",

  /**
   * Кнопка позвонить
   */
  callUsButton: "callUsButton",

  /**
   * Обёртка над элементами меню в дропдауне
   */
  menuList: "menuList",

  /**
   * Элемент меню,
   * в зависимости от наличия href становится либо ссылкой либо кнопкой
   */
  menuListItem: "menuListItem",

  /**
   * Иконка элемента меню
   */
  menuListItemIcon: "menuListItemIcon",

  /**
   * Обёртка над дропдауном */
  dropdownWrapper: "dropdownWrapper",

  /**
   * Обёртка над содержимым дропдауна
   */
  dropdownBody: "dropdownBody",

  /**
   * Кнокпа открытия дропдауна
   */
  dropdownTitle: "dropdownTitle",
} as const;
