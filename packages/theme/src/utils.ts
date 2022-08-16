import classNames from "classnames";
import { Classes } from "jss";

import {
  ClassesWithStyles,
  ComponentTheme,
  ITheme,
  Breakpoints,
} from "./types";

const getAppearanceClass = (mods: (string | undefined)[]) => {
  return mods.filter(Boolean).join("-");
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const getClassName = <T extends string>(
  classes: Classes,
  baseAppearance: string,
  appearance: string,
  componentName: T
) => {
  const uniqieClasses = [
    classes[componentName],
    classes[getAppearanceClass([componentName, "base"])],
    classes[getAppearanceClass([componentName, baseAppearance])],
    classes[getAppearanceClass([componentName, appearance])],
  ].filter(onlyUnique);

  return classNames(...uniqieClasses);
};

const createStylesFromTheme = (theme: ComponentTheme, appearance?: string) => {
  let res: ClassesWithStyles = {};

  for (const [componentName, styles] of Object.entries(theme)) {
    res[getAppearanceClass([componentName, appearance])] = styles;
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
    [componentName-{baseAppearance}]: styles - стили из темы приложения, за основу стилизации берётся baseAppearance
    [componentName-{appearance}]: styles - стили из темы приложения, используются для исключительного аппиранса
    
    такие же классы даются блокам внутри компонента.

    Приоритет: 
      дефолтные из библиотеки
      base из приложения
      baseAppearance из приложения
      appearance из приложения
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
