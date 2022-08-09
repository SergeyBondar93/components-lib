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

import { ComponentNames, useStyles } from "./styles";

interface IFooterProps extends IThemedProps {
  companyName: ReactNode;
  copyright: {
    from: number;
    to: number;
    text: ReactNode;
  };
  companyInfo: ReactNode;
}

export const Footer = ({
  baseAppearance = "base",
  appearance = "base",
  companyName,
  copyright: { from, to, text },
  companyInfo,
}: IFooterProps) => {
  const classes = useStyles();

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
    const cheLogoClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "cheLogo"
    );
    const cheNameClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "cheName"
    );
    const copyrightClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "copyright"
    );
    const copyrightBrClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "copyrightBr"
    );
    const companyInfoClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "companyInfo"
    );
    const paymentIconsClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "paymentIcons"
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
  );
};
