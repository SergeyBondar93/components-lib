import { IThemedProps } from "@cheaaa/theme";
import { Classes } from "jss";
import {
  HTMLAttributes,
  KeyboardEvent,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

type OverridedAttributes = "prefix" | "postfix" | "onChange" | "value";

type InputHTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLElement>,
  OverridedAttributes
>;

export interface IBaseInputProps extends InputHTMLAttributes, IThemedProps {
  /**
   * Функция onChange сразу первым аргументом принимает новое значение
   */
  onChange?: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Значение инпута
   * Добавляет компонентам wrapper input clearIcon дата аттрибут {data-hasvalue="true"}
   * Можно описать его в теме и получить нужный вид этого состояния
   */
  value: string | number | boolean;

  /**
   * В базовой версии виден вместо placeholder пока не в фокусе/нет value,
   * при фокусе отодвигается вверх и виден placeholder
   */
  label?: ReactNode;

  /**
   * Props для wrapper при необходимости
   */
  wrapperProps?: HTMLAttributes<HTMLDivElement>;

  /**
   * Props для label при необходимости
   */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;

  /**
   * Props для prefix при необходимости
   */
  prefixProps?: HTMLAttributes<HTMLSpanElement>;

  /**
   * Props для postfix при необходимости
   */
  postfixProps?: HTMLAttributes<HTMLSpanElement>;

  /**
   * В базовой версии виден только при фокусе на input.
   */
  placeholder?: string;

  /**
   * Делает width: 100%
   * Добавляет компоненту wrapper дата аттрибут {data-shouldfitcontent="true"}
   * можно описать его в теме и получить нужный вид этого состояния
   */
  shouldFitContent?: boolean;

  /**
   * Добавляет компонентам wrapper input clearIcon дата аттрибут {data-invalid="true"}
   * можно описать его в теме и получить нужный вид этого состояния
   */
  invalid?: boolean;

  /**
   * Добавляет компонентам wrapper input clearIcon дата аттрибут {data-valid="true"}
   * можно описать его в теме и получить нужный вид этого состояния
   */
  valid?: boolean;

  /**
   * Добавляет компонентам wrapper input clearIcon label дата аттрибут {data-disabled="true"}
   * можно описать его в теме и получить нужный вид этого состояния
   */
  disabled?: boolean;

  /**
   * Добавляет иконку очистки инпута.
   */
  isClearable?: boolean;

  /**
   * ReactNode перед инпутом
   */
  prefix?: ReactNode;

  /**
   * ReactNode после инпута
   */
  postfix?: ReactNode;

  classes: Classes<string>;
}

export interface IInputProps extends Omit<IBaseInputProps, "classes"> {
  /**
   * Функция onChange сразу первым аргументом принимает новое значение
   */
  onChange: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICodeInputProps
  extends Omit<IInputProps, "value" | "onChange"> {
  /**
   * необходимо ли сделать первый инпут в фокусе
   */
  isFocused?: boolean;

  /**
   * количество полей для ввода кода
   */
  fieldsCount: number;

  /**
   * срабатывает когда инпут заколнен
   */
  onComplete?: (value: string[]) => void;

  /**
   * массив чисел, массив вместо строки необходим для обработки пустых значений
   */
  value: string[];

  /**
   * Функция onChange сразу первым аргументом принимает новое значение
   */
  onChange: (value: string[], e?: KeyboardEvent<HTMLInputElement>) => void;
}
