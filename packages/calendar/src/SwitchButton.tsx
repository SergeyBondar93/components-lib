import { FC } from "react";
import { ChevronIcon } from "@cheaaa/icons";
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
      data-is-next={String(!!isNext)}
      onClick={onClick}
    >
      <ChevronIcon />
    </button>
  );
};

export default SwitchButton;
