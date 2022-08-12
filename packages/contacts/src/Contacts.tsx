import { CallIcon } from "@cheaaa/icons";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { memo, ReactNode, useMemo } from "react";

import { useStyles, ComponentNames } from "./styles";

type Phone = {
  /**
   * Телефон куда звоним
   */
  phone: string | number;
  /**
   * Текст телефона который видит пользователь для клика
   */
  title: string | number;
  /**
   * Страна / Город
   */
  label: string | number;
};

type SocialNetwork = {
  icon: ReactNode;
  link: string;
};

export interface IContacts {
  availableTime: ReactNode;
  phones: Phone[];
  email: string;
  socialNetworks?: SocialNetwork[];
  callUsButton?: {
    onClick: () => void;
    title: string | ReactNode;
  };
}
export interface IContactsProps extends IThemedProps {
  contacts: IContacts;
}

export const Contacts = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    contacts: { availableTime, phones, email, callUsButton, socialNetworks },
  }: IContactsProps) => {
    const classes = useStyles();

    const classNames = useMemo(() => {
      const contactsListClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsList"
      );
      const contactsListItemClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsListItem"
      );

      const contactsListItemLinkClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsListItemLink"
      );

      const contactsCallUsButtonClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "callUsButton"
      );
      const contactsListItemSocialNetworksClassName =
        getClassName<ComponentNames>(
          classes,
          baseAppearance,
          appearance,
          "contactsListItemSocialNetworks"
        );
      const contactsSocialNetworkLinkClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsSocialNetworkLink"
      );

      return {
        contactsListClassName,
        contactsListItemClassName,
        contactsListItemLinkClassName,
        contactsCallUsButtonClassName,
        contactsListItemSocialNetworksClassName,
        contactsSocialNetworkLinkClassName,
      };
    }, [classes, baseAppearance, appearance]);

    return (
      <ul className={classNames.contactsListClassName}>
        <li className={classNames.contactsListItemClassName}>
          {availableTime}
        </li>

        {phones.map(({ phone, title, label }) => {
          return (
            <li className={classNames.contactsListItemClassName} key={phone}>
              <a
                href={`tel:${phone}`}
                className={classNames.contactsListItemLinkClassName}
              >
                {title}
              </a>{" "}
              <span>{label}</span>
            </li>
          );
        })}

        <li className={classNames.contactsListItemClassName}>
          <a
            href={`mailto:${email}`}
            className={classNames.contactsListItemLinkClassName}
          >
            {email}
          </a>
        </li>

        {callUsButton && (
          <li className={classNames.contactsListItemClassName}>
            <button
              onClick={callUsButton.onClick}
              className={classNames.contactsCallUsButtonClassName}
            >
              <CallIcon />
              {callUsButton.title}
            </button>
          </li>
        )}

        {!!socialNetworks?.length && (
          <li className={classNames.contactsListItemSocialNetworksClassName}>
            {socialNetworks.map(({ icon, link }, i) => {
              return (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className={classNames.contactsSocialNetworkLinkClassName}
                >
                  {icon}
                </a>
              );
            })}
          </li>
        )}
      </ul>
    );
  }
);
