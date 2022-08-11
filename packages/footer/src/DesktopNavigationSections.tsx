import { Contacts } from "@cheaaa/contacts";
import { getClassName } from "@cheaaa/theme";
import { useMemo } from "react";

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
}: any) => {
  const classes = useStyles();

  const navigationListTitleClassName = useMemo(
    () =>
      getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "navigationListTitle"
      ),
    [classes, baseAppearance, appearance]
  );

  return (
    <>
      {navigationSections.map(({ title, links }) => {
        return (
          <div key={title}>
            <h4 className={navigationListTitleClassName}>{title}</h4>
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
            />
          </div>
        );
      })}

      <div>
        <h4 className={navigationListTitleClassName}>{contactsTitle}</h4>
        <Contacts contacts={contacts} />
      </div>
    </>
  );
};
