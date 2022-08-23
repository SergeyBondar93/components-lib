export const TAG_COMPONENT_NAMESPACE = `@che/tag`;

export const TAG_COMPONENTS_NAMES = {
  /**
   * Обёртка над всем
   */
  wrapper: `wrapper`,

  /**
   * Обёртка над компонентом {prefix}
   */
  prefix: `prefix`,

  /**
   * Обёртка над компонентом {postfix}
   */
  postfix: `postfix`,
} as const;
