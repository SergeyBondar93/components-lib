export const FOOTER_COMPONENT_NAMESPACE = "@che/footer";

export const FOOTER_COMPONENTS_NAMES = {
  /**
   * Обёртка над блоком партнёров
   */
  partnerBlockWrapper: "partnerBlockWrapper",

  /**
   * Обёртка над блоком счётчика партнёров
   */
  partnersCountWrapper: "partnersCountWrapper",

  /**
   * Цифра количество партнёров
   */
  partnersCount: "partnersCount",

  /**
   * Фраза "подключилось партнёров"
   */
  partnersCountText: "partnersCountText",

  /**
   * Обёртка над информационным текстом про сайт блог и форум
   */
  partnersInfoWrapper: "partnersInfoWrapper",

  /**
   * Обёртка над иконкой восклицательного знака перед текстом
   */
  partnersInfoIconWrapper: "partnersInfoIconWrapper",

  /**
   * Информационный текст про сайт блог и форум
   */
  partnersInfoText: "partnersInfoText",

  /**
   * Обёртка над кнопками войти и стать партнёром
   */
  partnersButtonsWrapper: "partnersButtonsWrapper",

  /**
   * Обёртка над блоком навигации
   */
  navigationWrapper: "navigationWrapper",

  /**
   * Обёртка над навигационным списоком со всеми компонентами
   * хедер - аккордион/список - при наличии большого количества опций ещё аккордион
   */
  navigationListsWrapper: "navigationListsWrapper",

  /**
   * List ссылок навигации
   */
  navigationList: "navigationList",

  /**
   * Title списка ссылок навигации
   */
  navigationListTitle: "navigationListTitle",

  /**
   * Li ссылки навигации
   */
  navigationListItem: "navigationListItem",

  /**
   * A ссылки навигации
   */
  navigationListItemLink: "navigationListItemLink",

  /** INFO FOOTER BLOCK */

  /**
   * Нижний блок с инфо и контактами при cariant=lite
   */
  bottomBlock: "bottomBlock",

  /**
   * Блок info
   */
  infoWrapper: "infoWrapper",

  /**
   * Обёртка логотипом компании
   */
  infoCheLogo: "infoCheLogo",

  /**
   * Обёртка названием компании
   */
  infoCheName: "infoCheName",

  /**
   * Copyright block
   */
  infoCopyright: "infoCopyright",

  /**
   * Перенос строки в Copyright block
   */
  infoCopyrightBr: "infoCopyrightBr",

  /**
   * Информация о компании
   */
  infoCompanyInfo: "infoCompanyInfo",

  /**
   * Иконки платёжной информации
   */
  infoPaymentIcons: "infoPaymentIcons",
} as const;
