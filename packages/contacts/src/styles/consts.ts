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
   * Item ссылок на соц сети
   */
  contactsListItemSocialNetworks: "contactsListItemSocialNetworks",

  /**
   * Item ссылок на соц сети
   */
  contactsSocialNetworkLink: "contactsSocialNetworkLink",

  /**
   * Кнопка позвонить
   */
  callUsButton: "callUsButton",
} as const;
