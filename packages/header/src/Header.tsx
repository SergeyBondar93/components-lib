import { memo, useMemo } from "react";

import { AccountIcon } from "@cheaaa/icons/AccountIcon";
import { PhoneIcon } from "@cheaaa/icons/PhoneIcon";
import { MenuIcon } from "@cheaaa/icons/MenuIcon";
import { CherehapaLogoIcon } from "@cheaaa/icons/CherehapaLogoIcon";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { Contacts, IContacts } from "@cheaaa/contacts";

import { HeaderComponentNames, useHeaderStyles } from "./styles";
import { Menu } from "./Menu";
import { BaseDropdown } from "./BaseDropdown";
import { IMenuItem } from "./MenuItem";

interface IHeaderProps extends IThemedProps {
  linkToMain?: string;
  whyNew?: any;
  accountLink?: string;
  menu?: IMenuItem[];

  /**
   * Пропсы блока контактов
   */
  contacts?: IContacts;
  /**
   * Аппирансы для блока контактов
   */
  contactsBaseAppearance?: string;
  contactsAppearance?: string;
}

export const Header = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    linkToMain,
    whyNew,
    accountLink,
    contacts,
    contactsBaseAppearance = baseAppearance,
    contactsAppearance = appearance,
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
      const whyNewClassName = getClassName<HeaderComponentNames>(
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
      const contactsWrapperClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsWrapper"
      );

      return {
        headerWrapperClassName,
        mainLogoWrapperClassName,
        whyNewClassName,
        menusTitleClassName,
        dropdownTitleClassName,
        contactsWrapperClassName,
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
              <button className={classNames.whyNewClassName}>
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
              <BaseDropdown
                title={<PhoneIcon />}
                baseAppearance={baseAppearance}
                appearance={appearance}
                classes={classes}
              >
                <div className={classNames.contactsWrapperClassName}>
                  <Contacts
                    contacts={contacts}
                    baseAppearance={contactsBaseAppearance}
                    appearance={contactsAppearance}
                  />
                </div>
              </BaseDropdown>
            )}

            {!!menu?.length && (
              <BaseDropdown
                title={<MenuIcon />}
                baseAppearance={baseAppearance}
                appearance={appearance}
                classes={classes}
              >
                <Menu
                  menu={menu}
                  baseAppearance={baseAppearance}
                  appearance={appearance}
                />
              </BaseDropdown>
            )}
          </div>
        </div>
      </>
    );
  }
);
