import { CheIconFooter } from "@cheaaa/icons/CheIconFooter";
import { PCIIcon } from "@cheaaa/icons/PCIIcon";
import { RSTIcon } from "@cheaaa/icons/RSTIcon";
import { JCBIcon } from "@cheaaa/icons/JCBIcon";
import { MastercardIcon } from "@cheaaa/icons/MastercardIcon";
import { VisaIcon } from "@cheaaa/icons/VisaIcon";
import { MirIcon } from "@cheaaa/icons/MirIcon";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useMemo } from "react";
import { Container } from "@cheaaa/container";
import { Contacts, IContacts, IContactsProps } from "@cheaaa/contacts";

import { ComponentNames, useStyles } from "./styles";
import { InfoBlock } from "./types";

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
   * Заголовок блока/аккордиона контактов
   */
  contactsTitle?: string;

  /**
   * Пропсы внутренних компонентов при необходимости
   */
  componentsProps?: {
    contacts?: Partial<IContactsProps>;
  };
}

export const FooterLite = ({
  baseAppearance = "base",
  appearance = "base",
  info: {
    companyName,
    copyright: { from, to, text },
    companyInfo,
  },
  contacts,
  contactsTitle = "Контакты",
  componentsProps: { contacts: contactsProps } = {},
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
        <div className={classNames.navigationListsWrapperClassName}>
          <h4 className={classNames.navigationListTitleClassName}>
            {contactsTitle}
          </h4>
          <Contacts contacts={contacts} {...contactsProps} />
        </div>
      </div>
    </Container>
  );
};
