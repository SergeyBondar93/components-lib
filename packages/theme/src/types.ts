import { CSSProperties } from "react";
import { TransitionStatus } from "react-transition-group";

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
export type AnimationComponentTheme<T extends string = string> =
  | ComponentTheme<T>
  | (ComponentTheme<T> & {
      [propName in TransitionStatus]?: ComponentTheme<T>;
    });

export type ITheme = {
  transition: {
    duration: number;
  };
  components: {
    [componentName: string]: {
      [appearance: string]: AnimationComponentTheme;
    };
  };
};

export type ClassesWithStyles = Record<string, Styles>;

export type PxSize = `${number}px`;
export type PxSizeWithSpace = ` ${PxSize}`;
export type Margin = `${PxSize}${PxSizeWithSpace | ""}${PxSizeWithSpace | ""}${
  | PxSizeWithSpace
  | ""}`;
