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
import { useMemo } from "react";

import { ComponentNames, useStyles } from "./styles";

interface IFooterProps extends IThemedProps {}

export const Footer = ({
  baseAppearance = "base",
  appearance = "base",
}: IFooterProps | any) => {
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
        <span className={classNames.cheNameClassName}>
          ООО «Черехапа Страхование»
        </span>
      </div>

      <div className={classNames.copyrightClassName}>
        © 2011–2021 ООО «Черехапа Страхование»
        <br className={classNames.copyrightBrClassName} />
        При использовании материалов гиперссылка на cherehapa.ru обязательна.
      </div>

      <div className={classNames.companyInfoClassName}>
        Группа компаний «Черехапа Страхование» — официальный представитель
        страховых компаний: АО СК «Альянс», АО «Совкомбанк страхование», ООО
        «Абсолют Страхование», АО «АльфаСтрахование», ООО СК «Арсеналъ», САО
        «ВСК», ООО «Зетта Страхование», СПАО «Ингосстрах», АО «Группа Ренессанс
        Страхование», СПАО «РЕСО-Гарантия», АО «Русский Стандарт Страхование»,
        ООО СК «Сбербанк Страхование», ООО СК «Согласие», АО «Тинькофф
        Страхование», ПАО САК «Энергогарант»,АО «СК «ПАРИ», АО «СК
        «Астро-Волга», ПАО СК «Росгосстрах» и др.
      </div>

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
