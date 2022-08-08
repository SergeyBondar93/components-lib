import { CallIcon } from "@cheaaa/icons";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { memo, useMemo } from "react";

import { useHeaderStyles, HeaderComponentNames } from "./styles";

interface IContactsProps extends Required<IThemedProps> {}

export const Contacts = memo(
  ({
    baseAppearance,
    appearance,
    availableTime,
    contacts: { /*availableTime,*/ phones, email, callUsButton },
  }: IContactsProps | any) => {
    const classes = useHeaderStyles();

    const classNames = useMemo(() => {
      const contactsListClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsList"
      );
      const contactsListItemClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsListItem"
      );

      const contactsListItemLinkClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "contactsListItemLink"
      );

      const contactsCallUsButtonClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "callUsButton"
      );

      return {
        contactsListClassName,
        contactsListItemClassName,
        contactsListItemLinkClassName,
        contactsCallUsButtonClassName,
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

        <li className={classNames.contactsListItemClassName}>
          <button
            onClick={callUsButton.onClick}
            className={classNames.contactsCallUsButtonClassName}
          >
            <CallIcon />
            {callUsButton.title}
          </button>
        </li>
      </ul>
    );
  }
);
