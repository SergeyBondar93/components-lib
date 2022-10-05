import { useMemo } from "react";

import { Contacts } from "@cheaaa/contacts";
import { getClassName } from "@cheaaa/theme";

import { NavigationLinks } from "./NavigationLinks";
import { ComponentNames, useStyles } from "./styles";

export const DesktopNavigationSections = ({
  navigationSections,
  hiddenLinksIsOpen,
  setHiddenLinksIsOpen,
  baseAppearance,
  appearance,
  contacts,
  contactsTitle,
  openedTitle,
  closedTitle,
  isMobile,
  contactsProps,
  hiddenOptionsAccordionProps,
}: any) => {
  const classes = useStyles();

  const classNames = useMemo(() => {
    const navigationListTitleClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "navigationListTitle"
    );

    const navigationListsWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "navigationListsWrapper"
    );

    return {
      navigationListTitleClassName,
      navigationListsWrapperClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <>
      {navigationSections.map(({ title, links }) => {
        return (
          <div
            key={title}
            className={classNames.navigationListsWrapperClassName}
          >
            <h4 className={classNames.navigationListTitleClassName}>{title}</h4>
            <NavigationLinks
              links={links}
              navigationSections={navigationSections}
              hiddenLinksIsOpen={hiddenLinksIsOpen}
              setHiddenLinksIsOpen={setHiddenLinksIsOpen}
              baseAppearance={baseAppearance}
              appearance={appearance}
              openedTitle={openedTitle}
              closedTitle={closedTitle}
              isMobile={isMobile}
              hiddenOptionsAccordionProps={hiddenOptionsAccordionProps}
            />
          </div>
        );
      })}

      <div className={classNames.navigationListsWrapperClassName}>
        <h4 className={classNames.navigationListTitleClassName}>
          {contactsTitle}
        </h4>
        <Contacts contacts={contacts} {...contactsProps} />
      </div>
    </>
  );
};
