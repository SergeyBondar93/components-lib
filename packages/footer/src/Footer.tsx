import {
  CheIconFooter,
  PCIIcon,
  RSTIcon,
  JCBIcon,
  MastercardIcon,
  VisaIcon,
  MirIcon,
} from "@cheaaa/icons";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { ReactNode, useMemo } from "react";
import { Container } from "@cheaaa/container";
import { Contacts } from "@cheaaa/contacts";
import { BaseAccordion } from "@cheaaa/accordion";

import { ComponentNames, useStyles } from "./styles";
interface IFooterProps extends IThemedProps {
  companyName: ReactNode;
  copyright: {
    from: number;
    to: number;
    text: ReactNode;
  };
  companyInfo: ReactNode;
  /** взять из компонента контактов */
  contacts: any;
  /** описать массив в 4 элемента со ссылками */
  navigationSections: any;
  variant?: "lite" | "full";
}

const NavigationAccordionBody = ({ links }) => {
  return (
    <>
      <ul>
        {links.map(({ href, title }) => {
          return (
            <li style={{ margin: "15px 0px" }}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const Footer = ({
  baseAppearance = "base",
  appearance = "base",
  companyName,
  copyright: { from, to, text },
  companyInfo,
  contacts,
  variant,
  navigationSections,
}: IFooterProps) => {
  const classes = useStyles();

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
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

    return {
      wrapperClassName,
      cheLogoClassName,
      cheNameClassName,
      copyrightClassName,
      copyrightBrClassName,
      companyInfoClassName,
      paymentIconsClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <Container>
      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {navigationSections.map(({ title, links }) => {
          return (
            <BaseAccordion
              title={title}
              defaultTitleButtonAppearance=""
              classes={classes}
            >
              <NavigationAccordionBody links={links} />
            </BaseAccordion>
          );
        })}
      </div>

      {/* Info block */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "30px",
        }}
      >
        <div className={classNames.wrapperClassName}>
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

        {variant === "lite" && (
          <div style={{ marginLeft: "100px" }}>
            {" "}
            <h3 style={{ fontSize: "13px", margin: "0px 12px" }}>
              Контакты
            </h3>{" "}
            {/* TODO добавить проброс аппирансов */}
            <Contacts contacts={contacts} />
          </div>
        )}
      </div>
    </Container>
  );
};
