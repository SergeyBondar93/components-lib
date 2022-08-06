import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  TransitionStatus,
  UNMOUNTED,
} from "react-transition-group/Transition";
import classNames from "classnames";
import { Classes } from "jss";

import {
  ComponentThemeWithAnimations,
  ClassesWithStyles,
  ComponentTheme,
  ITheme,
  Breakpoints,
} from "./types";

const ANIMATION_STATES: TransitionStatus[] = [
  UNMOUNTED,
  EXITED,
  ENTERING,
  ENTERED,
  EXITING,
];

const getAppearanceClass = (mods: (string | undefined)[]) => {
  return mods.filter(Boolean).join("-");
};

export const getClassName = <T extends string>(
  classes: Classes,
  baseAppearance: string,
  appearance: string,
  componentName: T,
  animationState?: string
) => {
  const uniqieClasses = [
    classes[componentName],
    classes[getAppearanceClass([componentName, "base"])],
    classes[getAppearanceClass([componentName, baseAppearance])],
    classes[getAppearanceClass([componentName, appearance])],
    classes[getAppearanceClass([componentName, animationState])],
    classes[getAppearanceClass([componentName, "base", animationState])],
    classes[
      getAppearanceClass([componentName, baseAppearance, animationState])
    ],
    classes[getAppearanceClass([componentName, appearance, animationState])],
  ];

  return classNames(...uniqieClasses);
};

const createStylesFromTheme = (
  theme: ComponentThemeWithAnimations,
  appearance?: string
) => {
  let res: ClassesWithStyles = {};

  for (const [propName, styles] of Object.entries(theme)) {
    if (ANIMATION_STATES.includes(propName as TransitionStatus)) {
      for (const [componentName, componentsStyles] of Object.entries(styles)) {
        // prettier-ignore
        res[getAppearanceClass([componentName, appearance, propName])] = componentsStyles;
      }
    } else {
      res[getAppearanceClass([propName, appearance])] = styles;
    }
  }

  return res;
};

const getStylesFromApplicationTheme = (
  globalTheme: ITheme,
  namespace: string
) => {
  let result: ClassesWithStyles = {};
  const componentTheme = globalTheme.components?.[namespace] || {};
  // prettier-ignore
  for (const [appearance, appearanceTheme] of Object.entries(componentTheme)) {
        result = Object.assign(result, createStylesFromTheme(appearanceTheme, appearance))
    }

  return result;
};

/*
    appearance должен быть передан компоненту как пропс и быть описан в теме приложения
    создаём объект со стилями с классами:

    [componentName]: styles - дефолтные стили компонента, опеределены в самом компоненте
    [componentName-base]: styles - стили опеределённые в теме приложения в base, используются для всех аппирансов
    [componentName-{appearance}]: styles - стили из темы приложения, используются для исключительного аппиранса
    [componentName-{animationState}]: styles - дефолтные стили компонента, опеределены в самом компоненте
    [componentName-base-{animationState}]: styles - стили опеределённые в теме приложения в base, используются для всех аппирансов
    [componentName-{appearance}-{animationState}]: styles - стили из темы приложения, используются для исключительного аппиранса

    такие же классы даются блокам внутри компонента
*/

export const createClasses =
  (defaultComponentTheme: ComponentTheme, componentNamespace: string) =>
  (globalTheme: ITheme) => {
    const styles = createStylesFromTheme(defaultComponentTheme);

    return Object.assign(
      styles,
      getStylesFromApplicationTheme(globalTheme, componentNamespace)
    );
  };

const MEDIA_SCREEN = "@media screen";

const BREAKPOINTS_SIZES = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1160,
  xxl: 1400,
};

const getBreakPoint = (value: number | Breakpoints): number => {
  let breakpoint: number | null = null;

  if (typeof value === "number") {
    breakpoint = value;
  } else {
    breakpoint = BREAKPOINTS_SIZES[value];
  }

  return breakpoint;
};

export function mediaMinWidth(value: number | Breakpoints) {
  return `${MEDIA_SCREEN} and (min-width: ${getBreakPoint(value)}px)`;
}

export function mediaMaxWidth(value: number | Breakpoints) {
  return `${MEDIA_SCREEN} and (max-width: ${getBreakPoint(value) - 1}px)`;
}

export function mediaBetweenWidth(
  minValue: number | Breakpoints,
  maxValue: number | Breakpoints
) {
  return `${MEDIA_SCREEN} and (min-width: ${getBreakPoint(
    minValue
  )}px) and (max-width: ${getBreakPoint(maxValue) - 1}px)`;
}

export const BREAKPOINTS = {
  ...BREAKPOINTS_SIZES,
  up: mediaMinWidth,
  down: mediaMaxWidth,
  between: mediaBetweenWidth,
};
