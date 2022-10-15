export const INPUT_COMPONENT_NAMESPACE = "@che/input";

export const CODE_INPUT_COMPONENT_NAMESPACE = "@che/code-input";

export const INPUT_COMPONENTS_NAMES = {
  /**
   * Обёртка над всем
   */
  wrapper: "wrapper",

  /**
   * Сам инпут
   */
  input: "input",

  /**
   * Обёртка над компонентом {prefix}
   */
  prefixWrapper: "prefixWrapper",

  /**
   * Обёртка над компонентом {postfix}
   */
  postfixWrapper: "postfixWrapper",

  /**
   * при передаче isClearable - стили для иконки очищения
   */
  clearIcon: "clearIcon",

  /**
   * Label - Текст отъезжающий наверх при фокусе/наличии значения в инпуте.
   */
  label: "label",
} as const;

/**
 * Селектор для стилизации браузерного автокомплита инпута
 */
export const INPUT_AUTOCOMPLETE_SELECTOR = `&:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active`;

export const emptyPrefixPostfixStyles = {
  width: "0px",
  marginLeft: "0px",
  marginRight: "0px",
};
