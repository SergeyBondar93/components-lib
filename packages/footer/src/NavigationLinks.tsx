import { getClassName } from "@cheaaa/theme";
import { useMemo } from "react";
import { Accordion } from "@cheaaa/accordion";

import { ComponentNames, useStyles } from "./styles";

const VISIBLE_LINKS_COUNT = 7;

export const NavigationLinks = ({
  links,
  hiddenLinksIsOpen,
  setHiddenLinksIsOpen,
  baseAppearance,
  appearance,
  openedTitle,
  closedTitle,
  isMobile,
  hiddenOptionsAccordionProps,
}: any) => {
  const { visibleLinks, hiddenLinks } = useMemo(() => {
    return {
      visibleLinks: links.slice(0, VISIBLE_LINKS_COUNT),
      hiddenLinks: links.slice(VISIBLE_LINKS_COUNT),
    };
  }, [links]);

  const classes = useStyles();

  const classNames = useMemo(() => {
    const navigationListClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "navigationList"
    );
    const navigationListItemClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "navigationListItem"
    );
    const navigationListItemLinkClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "navigationListItemLink"
    );

    return {
      navigationListClassName,
      navigationListItemClassName,
      navigationListItemLinkClassName,
    };
  }, [classes, baseAppearance, appearance]);

  const accordionProps = useMemo(() => {
    if (isMobile) return {};

    /**
     * На десктопе контроллируем открытие аккордионов со скрытыми ссылками,
     * что бы они были связаны и открывались/закрывались все разом
     */
    return {
      isOpen: hiddenLinksIsOpen,
      titleButtonProps: {
        onClick: () => setHiddenLinksIsOpen?.((isOpen) => !isOpen),
        ...hiddenOptionsAccordionProps.titleButtonProps,
      },
    };
  }, [
    isMobile,
    hiddenLinksIsOpen,
    setHiddenLinksIsOpen,
    hiddenOptionsAccordionProps,
  ]);

  return (
    <>
      <ul className={classNames.navigationListClassName}>
        {visibleLinks.map(({ href, title }, i) => {
          return (
            <li key={i} className={classNames.navigationListItemClassName}>
              <a
                target="_blank"
                className={classNames.navigationListItemLinkClassName}
                href={href}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      {!!hiddenLinks.length && (
        <Accordion
          title={({ isOpen }) => (isOpen ? openedTitle : closedTitle)}
          shouldFitContent
          {...hiddenOptionsAccordionProps}
          {...accordionProps}
        >
          <ul className={classNames.navigationListClassName}>
            {hiddenLinks.map(({ href, title }, i) => {
              return (
                <li key={i} className={classNames.navigationListItemClassName}>
                  <a
                    target="_blank"
                    href={href}
                    className={classNames.navigationListItemLinkClassName}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Accordion>
      )}
    </>
  );
};
