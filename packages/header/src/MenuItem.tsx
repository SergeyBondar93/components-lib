import { memo, ReactNode, useMemo } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { useHeaderStyles, HeaderComponentNames } from "./styles";

export interface IMenuItem {
  title: string;
  href?: string;
  icon: ReactNode;
  onClick?: () => void;
}

interface IMenuItemProps extends Required<IThemedProps>, IMenuItem {}

export const MenuItem = memo(
  ({
    baseAppearance,
    appearance,
    title,
    href,
    icon,
    onClick,
  }: IMenuItemProps) => {
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
  }
);
