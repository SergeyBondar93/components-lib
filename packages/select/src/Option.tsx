import { getClassName, IThemedProps } from "@cheaaa/theme";
import { CrossIcon } from "@cheaaa/icons";
import { forwardRef, ReactNode, useMemo } from "react";

import { useStyles, ComponentNames } from "./styles";
import { SelectOptionValue } from "./types";

interface IOptionProps extends IThemedProps {
  label: ReactNode;
  activeValue: SelectOptionValue | null;
  value: SelectOptionValue;
  index: number;
  isRemovable?: boolean;
  onMouseDown: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const Option = forwardRef<HTMLDivElement, IOptionProps>(
  (
    {
      baseAppearance = "base",
      appearance = "base",
      label,
      activeValue,
      value,
      isRemovable,
      onMouseDown,
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
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        data-active={String(isActive)}
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
