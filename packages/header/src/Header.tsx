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
import { Contacts, IContacts } from "./Contacts";
import { IMenuItem } from "./MenuItem";

interface IHeaderProps extends IThemedProps {
  linkToMain?: string;
  whyNew?: any;
  accountLink?: string;
  contacts?: IContacts;
  menu?: IMenuItem[];
}

export const Header = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    linkToMain,
    whyNew,
    accountLink,
    contacts,
    menu,
  }: IHeaderProps) => {
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
            {whyNew && (
              <button className={classNames.whyNewBodyClassName}>
                {whyNew.title}
              </button>
            )}

            {accountLink && (
              <a
                href={accountLink}
                className={classNames.dropdownTitleClassName}
              >
                <AccountIcon />
              </a>
            )}

            {contacts && (
              <HeaderDropdown
                title={<PhoneIcon />}
                baseAppearance={baseAppearance}
                appearance={appearance}
              >
                <Contacts
                  contacts={contacts}
                  baseAppearance={baseAppearance}
                  appearance={appearance}
                />
              </HeaderDropdown>
            )}

            {!!menu?.length && (
              <HeaderDropdown
                title={<MenuIcon />}
                baseAppearance={baseAppearance}
                appearance={appearance}
              >
                <Menu
                  menu={menu}
                  baseAppearance={baseAppearance}
                  appearance={appearance}
                />
              </HeaderDropdown>
            )}
          </div>
        </div>
      </>
    );
  }
);
