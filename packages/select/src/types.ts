import { IInputProps } from "@cheaaa/input";
import { IThemedProps } from "@cheaaa/theme";
import { ReactNode } from "react";

export type OptionValue = string;

export type Option = {
  value: OptionValue;
  label: ReactNode;
};

export type SelectFilterFunction<
  O extends { label: any; value: any } = Option
> = (
  searchString: string,
  options: { selectedOptions: O[]; unselectedOptions: O[] }
) => Option[];

type InputProps = Omit<IInputProps, "onChange" | "value"> & {
  onChange?: IInputProps["onChange"];
  onBlur?: IInputProps["onBlur"];
};

interface IBaseSelect extends IThemedProps {
  /**
   * Функция для кастомной фильтрации элементов.
   * Принимает первым аргументом введённую строку, вторым объект из выбранных и не выбранных опций
   * Должна вернуть опции для рендера в раздел не выбранных.
   */
  filterFunction?: SelectFilterFunction;
  disabled?: boolean;
  isOpen?: boolean;

  options: Option[];
  /**
   * Будет ли закрываться после выбора значения
   * @defaultValue true
   */
  isCloseOnSelect?: boolean;
  /**
   * Будет ли закрываться после удаления значения
   * @defaultValue false
   */
  isCloseOnRemove?: boolean;

  /**
   * Label для инпута
   */
  label: ReactNode;

  /**
   * Placeholder для инпута
   */
  placeholder: string;

  /**
   * Header группы выбранных опций
   */
  selectedHeader: string;

  /**
   * Header группы не выбранных опций
   */
  unselectedHeader: string;

  /**
   * Сообщение о не найденных опциях
   */
  noOptionsMessage?: ReactNode;
  inputProps?: InputProps;
}

interface IMultiValueSelectProps extends IBaseSelect {
  /**
   * Возможность выбора нескольких значений
   * @defaultValue true
   */
  isMulti?: true;
  value: OptionValue[];
  onChange: (newValue: OptionValue[]) => void;
}
interface ISingleValueSelectProps extends IBaseSelect {
  /**
   * Возможность выбора нескольких значений
   * @defaultValue true
   */
  isMulti: false;
  value: OptionValue;
  onChange: (newValue: OptionValue) => void;
}

export type SelectProps = IMultiValueSelectProps | ISingleValueSelectProps;
