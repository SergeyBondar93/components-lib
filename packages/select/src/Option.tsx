import { forwardRef, ReactNode, useMemo } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";
import { CrossIcon } from "@cheaaa/icons/CrossIcon";

import { useStyles, ComponentNames } from "./styles";
import { SelectOptionValue } from "./types";

export interface IOptionProps extends IThemedProps {
  activeValue: SelectOptionValue | null;
  label: ReactNode;
  value: SelectOptionValue;
  disabled?: boolean;
  index: number;
  isRemovable?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const Option = forwardRef<HTMLDivElement, IOptionProps>(
  (
    {
      baseAppearance = "base",
      appearance = "base",
      activeValue,
      label,
      value,
      disabled,
      isRemovable,
      onClick,
      onMouseOver,
      onMouseLeave,
    },
    ref
  ) => {
    const classes = useStyles();

    const classNames = useMemo(() => {
      const listItemClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "listItem"
      );

      const removeIconWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "removeIconWrapper"
      );

      return { listItemClassName, removeIconWrapperClassName };
    }, [classes, baseAppearance, appearance]);

    const isActive = value === activeValue;

    return (
      <div
        className={classNames.listItemClassName}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        /**
         * Активная опция, достигается либо через hover либо с помощью клавиатуры
         */
        data-active={String(isActive)}
        data-disabled={String(!!disabled)}
        ref={ref}
      >
        <span>{label}</span>

        {isRemovable && (
          <span className={classNames.removeIconWrapperClassName}>
            <CrossIcon
              fill={"inherit"}
              fillOpacity={isActive ? 0.9 : 0.35}
              height={10}
              width={10}
            />
          </span>
        )}
      </div>
    );
  }
);
