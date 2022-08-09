export const CONTACTS_COMPONENT_NAMESPACE = `@che/contacts`;

export const CONTACTS_COMPONENTS_NAMES = {
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
} as const;
