import {
  AccountIcon,
  PhoneIcon,
  MenuIcon,
  CherehapaLogoIcon,
} from "@cheaaa/icons";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { memo, useMemo } from "react";

import { HeaderComponentNames, useHeaderStyles } from "./styles";
import { Menu } from "./Menu";
import { HeaderDropdown } from "./HeaderDropdown";
import { Contacts } from "./Contacts";

interface IHeaderProps extends IThemedProps {
  linkToMain: any;
  whyNew: any;
  accountLink: any;
  contacts: any;
  menu: any;
}

export const Header = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    linkToMain,
    whyNew,
    accountLink,
    contacts,
    // menu,
    onClick,
  }: IHeaderProps & any) => {
    const classes = useHeaderStyles();

    const classNames = useMemo(() => {
      const headerWrapperClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "headerWrapper"
      );
      const mainLogoWrapperClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "mainLogo"
      );
      const menusTitleClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "menus"
      );
      const whyNewBodyClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "whyNew"
      );
      const dropdownTitleClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "dropdownTitle"
      );

      return {
        headerWrapperClassName,
        mainLogoWrapperClassName,
        whyNewBodyClassName,
        menusTitleClassName,
        dropdownTitleClassName,
      };
    }, [classes, baseAppearance, appearance]);

    return (
      <>
        <div className={classNames.headerWrapperClassName}>
          <a href={linkToMain} className={classNames.mainLogoWrapperClassName}>
            <CherehapaLogoIcon />
          </a>

          <div className={classNames.menusTitleClassName}>
            <button className={classNames.whyNewBodyClassName}>
              {whyNew.title}
            </button>

            <a href={accountLink} className={classNames.dropdownTitleClassName}>
              <AccountIcon />
            </a>

            <HeaderDropdown title={<PhoneIcon />}>
              <Contacts contacts={contacts} />
            </HeaderDropdown>

            <HeaderDropdown title={<MenuIcon />}>
              <Menu /*menu={menu}*/ onClick={onClick} />
            </HeaderDropdown>
          </div>
        </div>
      </>
    );
  }
);
