import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useMemo } from "react";

import { MenuItem } from "./MenuItem";
import { useHeaderStyles, HeaderComponentNames } from "./styles";

interface IMenuProps extends Required<IThemedProps> {}

export const Menu = ({
  baseAppearance,
  appearance,
  menu,
}: IMenuProps | any) => {
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
      {menu.map((item) => {
        return <MenuItem {...item} />;
      })}
    </div>
  );
};
