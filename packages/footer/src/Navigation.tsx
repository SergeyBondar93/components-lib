import { useMemo, useState } from "react";
import { useScreenSizes } from "@cheaaa/utils";
import { getClassName } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";
import { MobileNavigationSections } from "./MobileNavigationSections";
import { DesktopNavigationSections } from "./DesktopNavigationSections";

export const Navigation = ({
  navigationSections,
  navigationSectionsDesktopWidth,
  baseAppearance,
  appearance,
  contacts,
  contactsTitle,
  openedTitle,
  closedTitle,
  variant,
  contactsProps,
  navigationAccordionsProps,
  hiddenOptionsAccordionProps,
}: any) => {
  const classes = useStyles();
  const { width } = useScreenSizes();

  const [hiddenLinksIsOpen, setHiddenLinksIsOpen] = useState(false);

  const isMobile = useMemo(
    () => width < navigationSectionsDesktopWidth,
    [width, navigationSectionsDesktopWidth]
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
          variant={variant}
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
          variant={variant}
          contactsProps={contactsProps}
          hiddenOptionsAccordionProps={hiddenOptionsAccordionProps}
        />
      )}
    </div>
  );
};
