import { CSSProperties } from "react";

type Media = `@media ${string}`;

type MediaQueries = {
  [Key: Media]: CSSProperties;
};

type ExpandedCssProperties = {
  [ket: string]: any;
} & CSSProperties;

export type Styles =
  | ExpandedCssProperties
  | (MediaQueries & ExpandedCssProperties);

export type ComponentTheme<T extends string = string> = {
  [component in T]: Styles;
};

export type ITheme = {
  transition: {
    duration: number;
  };
  components: {
    [componentName: string]: {
      [appearance: string]: ComponentTheme;
    };
  };
};

export type ClassesWithStyles = Record<string, Styles>;

export type PxSize = `${number}px`;
export type PxSizeWithSpace = ` ${PxSize}`;
export type Margin = `${PxSize}${PxSizeWithSpace | ""}${PxSizeWithSpace | ""}${
  | PxSizeWithSpace
  | ""}`;

export interface IThemedProps {
  /**
   * Внешний вид, стили которого наложатся первыми на компонент. Используется для наследования стилей
   */
  baseAppearance?: string;

  /**
   * Специфичный аппиранс, для изменения стилей описанных в baseAppearance / {base}
   */
  appearance?: string;
}

export type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface MediaQueryFn {
  (value: Breakpoints | number): string;
}

export interface MediaQueryBetweenFn {
  (minValue: Breakpoints | number, maxValue: Breakpoints | number): string;
}

export interface ThemeBreakpoints {
  up: MediaQueryFn;
  down: MediaQueryFn;
  between: MediaQueryBetweenFn;
}
