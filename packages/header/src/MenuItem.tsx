import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useMemo } from "react";

import { useHeaderStyles, HeaderComponentNames } from "./styles";

interface IMenuItemProps extends Required<IThemedProps> {}

export const MenuItem = ({
  baseAppearance,
  appearance,
  title,
  href,
  icon,
  onClick,
}: IMenuItemProps | any) => {
  const classes = useHeaderStyles();

  const classNames = useMemo(() => {
    const menuListItemClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "menuListItem"
    );

    const menuListItemIconLinkClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "menuListItemIcon"
    );

    return {
      menuListItemClassName,
      menuListItemIconLinkClassName,
    };
  }, [classes, baseAppearance, appearance]);

  const Element = useMemo(() => (href ? "a" : "button"), [href]);

  return (
    <Element
      onClick={onClick}
      href={href}
      className={classNames.menuListItemClassName}
    >
      <span className={classNames.menuListItemIconLinkClassName}>{icon}</span>{" "}
      {title}
    </Element>
  );
};
