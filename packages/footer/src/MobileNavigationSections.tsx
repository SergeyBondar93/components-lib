import { Accordion } from "@cheaaa/accordion";
import { Contacts } from "@cheaaa/contacts";

import { NavigationLinks } from "./NavigationLinks";

export const MobileNavigationSections = ({
  navigationSections,
  baseAppearance,
  appearance,
  contacts,
  contactsTitle,
  openedTitle,
  closedTitle,
  isMobile,
}: any) => {
  return (
    <>
      {navigationSections.map(({ title, links }) => {
        return (
          <Accordion key={title} title={title} shouldFitContent>
            <NavigationLinks
              links={links}
              navigationSections={navigationSections}
              baseAppearance={baseAppearance}
              appearance={appearance}
              openedTitle={openedTitle}
              closedTitle={closedTitle}
              isMobile={isMobile}
            />
          </Accordion>
        );
      })}

      <Accordion title={contactsTitle} shouldFitContent>
        <Contacts contacts={contacts} />
      </Accordion>
    </>
  );
};
