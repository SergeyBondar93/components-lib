import {
  AccountIcon,
  PhoneIcon,
  MenuIcon,
  CherehapaLogoIcon,
} from "@cheaaa/icons";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useMemo } from "react";
import { PlaneIcon } from "@cheaaa/icons";
import { CarIcon } from "@cheaaa/icons";
import { HomeIcon } from "@cheaaa/icons";
import { DocumentIcon } from "@cheaaa/icons";
import { WalletIcon } from "@cheaaa/icons";
import { InfoIcon } from "@cheaaa/icons";
import { CommandIcon } from "@cheaaa/icons";
import { MoonIcon } from "@cheaaa/icons";

import { HeaderComponentNames, useHeaderStyles } from "./styles";
import { Menu } from "./Menu";
import { HeaderDropdown } from "./HeaderDropdown";
import { Contacts } from "./Contacts";

const AvailableTime = () => {
  return (
    <>
      <span>Пн-Пт: 08:00-00:00</span>
      <br />
      <span>Сб-Вс: 09:00-21:00</span>
    </>
  );
};

const props = {
  linkToMain: "https://kirk.cherehapa.ru/",
  whyNew: { link: "https://kirk.cherehapa.ru/", title: "Почему всё новое?" },
  accountLink: "https://google.com",
  contacts: {
    availableTime: <AvailableTime />,
    phones: [
      { phone: "84952151198", title: "8 (495) 215-11-98", label: "Москва" },
      {
        phone: "88005552198",
        title: "8 (800) 555-21-98",
        label: "Россия (бесплатно)",
      },
    ],
    email: "support@cherehapa.ru",

    callUsButton: {
      title: "Позвонить онлайн",
      onClick: () => {},
    },
  },
  menu: [
    {
      title: "Туристическая страховка",
      href: "https://kirk.cherehapa.ru/",
      icon: <PlaneIcon fill="#636AFF" />,
    },
    {
      title: "Полис Осаго",
      href: "https://kirk.cherehapa.ru/auto",
      icon: <CarIcon fill="#636AFF" />,
    },
    {
      title: "Страхование ипотеки",
      href: "https://kirk.cherehapa.ru/ipoteka",
      icon: <HomeIcon fill="#636AFF" />,
    },
    {
      title: "Блог",
      href: "https://kirk.cherehapa.ru/blog",
      icon: <DocumentIcon fill="#636AFF" />,
    },
    {
      title: "Партнерская программа",
      href: "https://partners.cherehapa.ru/",
      icon: <WalletIcon fill="#636AFF" />,
    },
    {
      title: "Полезная информация",
      href: "https://kirk.cherehapa.ru/info",
      icon: <InfoIcon fill="#636AFF" />,
    },
    {
      title: "Наша команда",
      href: "https://kirk.cherehapa.ru/",
      icon: <CommandIcon fill="#636AFF" />,
    },
    {
      title: "Контакты",
      href: "https://kirk.cherehapa.ru/contacts",
      icon: <PhoneIcon fill="#636AFF" />,
    },
    {
      title: "Тёмная тема",
      onClick: () => {},
      icon: <MoonIcon fill="#636AFF" />,
    },
  ],
};

interface IHeaderProps extends IThemedProps {}

export const Header = ({
  baseAppearance = "base",
  appearance = "base",
}: IHeaderProps & any) => {
  const classes = useHeaderStyles();

  const classNames = useMemo(() => {
    const headerWrapperClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "headerWrapper"
    );
    const mainLogoWrapperClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "mainLogo"
    );
    const menusTitleClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "menus"
    );
    const whyNewBodyClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "whyNew"
    );
    const dropdownTitleClassName = getClassName<HeaderComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "dropdownTitle"
    );

    return {
      headerWrapperClassName,
      mainLogoWrapperClassName,
      whyNewBodyClassName,
      menusTitleClassName,
      dropdownTitleClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <>
      <div className={classNames.headerWrapperClassName}>
        <a
          href={props.linkToMain}
          className={classNames.mainLogoWrapperClassName}
        >
          <CherehapaLogoIcon />
        </a>

        <div className={classNames.menusTitleClassName}>
          <button className={classNames.whyNewBodyClassName}>
            {props.whyNew.title}
          </button>

          <a
            href={props.accountLink}
            className={classNames.dropdownTitleClassName}
          >
            <AccountIcon />
          </a>

          <HeaderDropdown title={<PhoneIcon />}>
            <Contacts {...props.contacts} />
          </HeaderDropdown>
          <HeaderDropdown title={<MenuIcon />}>
            <Menu menu={props.menu} />
          </HeaderDropdown>
        </div>
      </div>
    </>
  );
};
