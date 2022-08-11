export const FOOTER_COMPONENT_NAMESPACE = "@che/footer";

export const FOOTER_COMPONENTS_NAMES = {
  /** NAVIGATIONS ACCORDIONS */
  /**
   * Обёртка каждого аккордиона навигации
   */
  navigationAccordionWrapper: "wrapper",
  /**
   * Иконка аккордиона свёрнут/развёрнут
   */
  navigationAccordionIcon: "icon",
  /**
   * Body аккордиона
   */
  navigationAccordionBody: "body",
  /**
   * Обёртка над children аккордиона
   */
  navigationAccordionChildrenWrapper: "childrenWrapper",

  /** INFO FOOTER BLOCK */
  /**
   * Обёртка над компонентом
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
