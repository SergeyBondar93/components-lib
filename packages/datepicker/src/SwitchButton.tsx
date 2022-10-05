import { FC } from "react";

import { ChevronIconCalendar } from "@cheaaa/icons/ChevronIconCalendar";
import { getClassName, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";

interface SwitchButton extends Required<IThemedProps> {
  isNext: boolean;
  onClick: any;
}

const SwitchButton: FC<any & SwitchButton> = ({
  baseAppearance,
  appearance,
  isNext,
  onClick,
}) => {
  const classes = useStyles();

  const className = getClassName<ComponentNames>(
    classes,
    baseAppearance,
    appearance,
    "changeMonthButtonWrapper"
  );

  return (
    <button
      className={className}
      /**
       * Является ли кнопка переключателем месяца на следующий
       */
      data-is-next={String(!!isNext)}
      onClick={onClick}
    >
      <ChevronIconCalendar />
    </button>
  );
};

export default SwitchButton;
