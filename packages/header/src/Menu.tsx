import { getClassName, IThemedProps } from "@cheaaa/theme";
import { memo, useMemo } from "react";

import { IMenuItem, MenuItem } from "./MenuItem";
import { useHeaderStyles, HeaderComponentNames } from "./styles";

interface IMenuProps extends Required<IThemedProps> {
  menu: IMenuItem[];
  handleClose?: () => void;
}

export const Menu = memo(({ baseAppearance, appearance, menu }: IMenuProps) => {
  const classes = useHeaderStyles();

  const classNames = useMemo(() => {
    const menuListClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "menuList"
    );

    return {
      menuListClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <div className={classNames.menuListClassName}>
      {menu?.map((item) => {
        return (
          <MenuItem
            {...item}
            key={item.title}
            baseAppearance={baseAppearance}
            appearance={appearance}
          />
        );
      })}
    </div>
  );
});
