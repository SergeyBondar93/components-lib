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
import { IContacts, IContactsProps } from "@cheaaa/contacts";
import { IAccordionProps } from "@cheaaa/accordion";

import { ComponentNames, useStyles } from "./styles";
import { Navigation } from "./Navigation";
import { PartnersBlock } from "./PartnersBlock";
import { NavigationSections } from "./types";

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
  /**
   * Блок инфо о компании, "мы сотрудничаем с..."
   */
  info: InfoBlock;

  /**
   * Блок контактов, принимает пропсы контактов
   */
  contacts: IContacts;

  /**
   * 4 блока навигации с заголовками и ссылками
   * необходимо массиву дать в приложении тип NavigationSections
   */
  navigationSections: NavigationSections;

  /**
   * Ссылка на страницу "Стать партнёром"
   */
  becomePartnerLink: string;

  /**
   * Ссылка в ЛК
   */
  signInAccountLink: string;

  /**
   * Ширина при которой навигационные блоки из аккордионов становятся списками
   * @default {1160}
   */
  navigationSectionsDesktopBreakpoint?: number;

  /**
   * Заголовок блока/аккордиона контактов
   */
  contactsTitle?: string;

  /**
   * Текст на кнопках вложенных аккордионов
   */
  hiddenLinksAccordionTitles?: {
    openedTitle?: string;
    closedTitle?: string;
  };

  /**
   * Пропсы внутренних компонентов при необходимости
   */
  componentsProps?: {
    contacts?: Partial<IContactsProps>;
    navigationAccordions?: Partial<IAccordionProps>;
    hiddenOptionsAccordion?: Partial<IAccordionProps>;
    becomePartnerButton?: any;
    signInAccountButton?: any;
  };

  /**
   * Количество партнёров
   */
  partnersCount?: number;

  /**
   * Анимация отображения партнёров от 0 до partnersCount, задаётся в секундах
   */
  partnersCountAnimationTime?: `${number}.${number}s`;
}

export const FooterFull = ({
  baseAppearance = "base",
  appearance = "base",
  info: {
    companyName,
    copyright: { from, to, text },
    companyInfo,
  },
  contacts,
  contactsTitle = "Контакты",
  navigationSections,
  navigationSectionsDesktopBreakpoint = BREAKPOINTS.xl,
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
  } = {},
  partnersCount = 6079,
  partnersCountAnimationTime = "2.0s",
  becomePartnerLink,
  signInAccountLink,
}: IFooterProps) => {
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
      {/* Partners block */}
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
      <Navigation
        navigationSectionsDesktopBreakpoint={
          navigationSectionsDesktopBreakpoint
        }
        navigationSections={navigationSections}
        baseAppearance={baseAppearance}
        appearance={appearance}
        contacts={contacts}
        contactsTitle={contactsTitle}
        openedTitle={openedTitle}
        closedTitle={closedTitle}
        contactsProps={contactsProps}
        navigationAccordionsProps={navigationAccordionsProps}
        hiddenOptionsAccordionProps={hiddenOptionsAccordionProps}
      />

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
      </div>
    </Container>
  );
};
