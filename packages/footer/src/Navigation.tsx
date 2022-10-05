import { useMemo, useState } from "react";

import { getClassName, useScreenSizes } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";
import { MobileNavigationSections } from "./MobileNavigationSections";
import { DesktopNavigationSections } from "./DesktopNavigationSections";

export const Navigation = ({
  navigationSections,
  navigationSectionsDesktopBreakpoint,
  baseAppearance,
  appearance,
  contacts,
  contactsTitle,
  openedTitle,
  closedTitle,
  contactsProps,
  navigationAccordionsProps,
  hiddenOptionsAccordionProps,
}: any) => {
  const classes = useStyles();
  const { width } = useScreenSizes();

  const [hiddenLinksIsOpen, setHiddenLinksIsOpen] = useState(false);

  const isMobile = useMemo(
    () => width < navigationSectionsDesktopBreakpoint,
    [width, navigationSectionsDesktopBreakpoint]
  );

  const navigationWrapperClassName = useMemo(() => {
    return getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "navigationWrapper"
    );
  }, [classes, baseAppearance, appearance]);

  return (
    <div className={navigationWrapperClassName}>
      {isMobile ? (
        <MobileNavigationSections
          navigationSections={navigationSections}
          baseAppearance={baseAppearance}
          appearance={appearance}
          contacts={contacts}
          contactsTitle={contactsTitle}
          openedTitle={openedTitle}
          closedTitle={closedTitle}
          isMobile
          contactsProps={contactsProps}
          navigationAccordionsProps={navigationAccordionsProps}
          hiddenOptionsAccordionProps={hiddenOptionsAccordionProps}
        />
      ) : (
        <DesktopNavigationSections
          navigationSections={navigationSections}
          hiddenLinksIsOpen={hiddenLinksIsOpen}
          setHiddenLinksIsOpen={setHiddenLinksIsOpen}
          baseAppearance={baseAppearance}
          appearance={appearance}
          contacts={contacts}
          contactsTitle={contactsTitle}
          openedTitle={openedTitle}
          closedTitle={closedTitle}
          isMobile={false}
          contactsProps={contactsProps}
          hiddenOptionsAccordionProps={hiddenOptionsAccordionProps}
        />
      )}
    </div>
  );
};
