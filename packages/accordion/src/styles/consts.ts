export const ACCORDION_COMPONENT_NAMESPACE = "@che/accordion";

export const ACCORDION_COMPONENTS_NAMES = {
  /**
   * Обёртка над аккордионом
   */
  wrapper: "wrapper",
  /**
   * Иконка открытия / закрытия
   */
  icon: "icon",

  /**
   * Обёртка над childrenWrapper. отвечает за скрытие children
   */
  body: "body",

  /**
   * Обёртка над children, необходима для вычисления размеров children
   */
  childrenWrapper: "childrenWrapper",
} as const;

export const DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE = "accordion-title";

export const DEFAULT_FOOTER_ACCORDION_TITLE_BUTTON_APPEARANCE =
  "footer-accordion-title";
