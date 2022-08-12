import {
  CheIconFooter,
  PCIIcon,
  RSTIcon,
  JCBIcon,
  MastercardIcon,
  VisaIcon,
  MirIcon,
} from "@cheaaa/icons";
import { BREAKPOINTS, getClassName, IThemedProps } from "@cheaaa/theme";
import { ReactNode, useMemo } from "react";
import { Container } from "@cheaaa/container";
import { Contacts } from "@cheaaa/contacts";

import { ComponentNames, useStyles } from "./styles";
import { Navigation } from "./Navigation";
import { Variant } from "./types";
import { isFull } from "./utils";
import { PartnersBlock } from "./PartnersBlock";

interface InfoBlock {
  companyName: ReactNode;
  copyright: {
    from: number;
    to: number;
    text: ReactNode;
  };
  companyInfo: ReactNode;
}

interface IFooterProps extends IThemedProps {
  info: InfoBlock;
  /** взять из компонента контактов */
  contacts: any;
  /** описать массив в 4 элемента со ссылками */
  navigationSections: any;

  /**
   * Вариант отображения футера.
   */
  variant?: Variant;
}

export const Footer = ({
  baseAppearance = "base",
  appearance = "base",
  info: {
    companyName,
    copyright: { from, to, text },
    companyInfo,
  },
  contacts,
  variant,
  navigationSections,
  navigationSectionsDesktopWidth = BREAKPOINTS.xl,
  contactsTitle = "Контакты",
  hiddenLinksAccordionTitles: { openedTitle, closedTitle } = {
    openedTitle: "Скрыть",
    closedTitle: "Ещё",
  },
  componentsProps: {
    contacts: contactsProps,
    navigationAccordions: navigationAccordionsProps,
    hiddenOptionsAccordion: hiddenOptionsAccordionProps,
    becomePartnerButton: becomePartnerButtonProps,
    signInAccountButton: signInAccountButtonProps,
  },
  partnersCount = 6079,
  partnersCountAnimationTime = "2s",
  becomePartnerLink,
  signInAccountLink,
}: IFooterProps | any) => {
  const classes = useStyles();

  const classNames = useMemo(() => {
    const bottomBlockClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "bottomBlock"
    );
    const infoWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoWrapper"
    );
    const cheLogoClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoCheLogo"
    );
    const cheNameClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoCheName"
    );
    const copyrightClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoCopyright"
    );
    const copyrightBrClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoCopyrightBr"
    );
    const companyInfoClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoCompanyInfo"
    );
    const paymentIconsClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "infoPaymentIcons"
    );
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
      bottomBlockClassName,
      infoWrapperClassName,
      cheLogoClassName,
      cheNameClassName,
      copyrightClassName,
      copyrightBrClassName,
      companyInfoClassName,
      paymentIconsClassName,
      navigationListTitleClassName,
      navigationListsWrapperClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <Container>
      <PartnersBlock
        baseAppearance={baseAppearance}
        appearance={appearance}
        becomePartnerButtonProps={becomePartnerButtonProps}
        signInAccountButtonProps={signInAccountButtonProps}
        becomePartnerLink={becomePartnerLink}
        signInAccountLink={signInAccountLink}
        partnersCount={partnersCount}
        partnersCountAnimationTime={partnersCountAnimationTime}
      />

      {/* Navigation */}

      {isFull(variant) && (
        <Navigation
          navigationSectionsDesktopWidth={navigationSectionsDesktopWidth}
          navigationSections={navigationSections}
          baseAppearance={baseAppearance}
          appearance={appearance}
          contacts={contacts}
          contactsTitle={contactsTitle}
          openedTitle={openedTitle}
          closedTitle={closedTitle}
          variant={variant}
          contactsProps={contactsProps}
          navigationAccordionsProps={navigationAccordionsProps}
          hiddenOptionsAccordionProps={hiddenOptionsAccordionProps}
        />
      )}

      {/* Bottom Info block */}
      <div className={classNames.bottomBlockClassName}>
        <div className={classNames.infoWrapperClassName}>
          <div className={classNames.cheLogoClassName}>
            <CheIconFooter />
            <span className={classNames.cheNameClassName}>{companyName}</span>
          </div>

          <div className={classNames.copyrightClassName}>
            {`© ${from}–${to} ${companyName}`}
            <br className={classNames.copyrightBrClassName} />
            {text}
          </div>

          <div className={classNames.companyInfoClassName}>{companyInfo}</div>

          <div className={classNames.paymentIconsClassName}>
            <PCIIcon />
            <RSTIcon />
            <JCBIcon />
            <MastercardIcon />
            <VisaIcon />
            <MirIcon />
          </div>
        </div>

        {!isFull(variant) && (
          <div className={classNames.navigationListsWrapperClassName}>
            <h4 className={classNames.navigationListTitleClassName}>
              Контакты
            </h4>
            <Contacts contacts={contacts} {...contactsProps} />
          </div>
        )}
      </div>
    </Container>
  );
};
