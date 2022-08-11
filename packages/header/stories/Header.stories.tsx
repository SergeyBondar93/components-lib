import { Meta } from "@storybook/react";
import { Container } from "@cheaaa/container";
import {
  MoonIcon,
  PhoneIcon,
  PlaneIcon,
  CarIcon,
  HomeIcon,
  DocumentIcon,
  WalletIcon,
  InfoIcon,
  CommandIcon,
} from "@cheaaa/icons";
import { useMemo, useState } from "react";

import { Header } from "../src/Header";

// @ts-ignore
import bg from "./bg.jpg";
import { SunIcon } from "./sunIcon";

export default {
  title: "Header",
} as Meta;

const MockFiltersBlock = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        marginTop: "200px",
      }}
    >
      <div
        style={{
          height: "60px",
          width: "33%",
          borderRadius: "12px",
          background: "white",
        }}
      ></div>
      <div
        style={{
          height: "60px",
          width: "33%",
          borderRadius: "12px",
          background: "white",
        }}
      ></div>
      <div
        style={{
          height: "60px",
          width: "33%",
          borderRadius: "12px",
          background: "white",
        }}
      ></div>
    </div>
  );
};

const AvailableTime = () => {
  return (
    <>
      <span>Пн-Пт: 08:00-00:00</span>
      <br />
      <span>Сб-Вс: 09:00-21:00</span>
    </>
  );
};

type ThemeType = "light" | "dark";

interface IBaseProps {
  withLinkToMain: boolean;
  withWhyNew: boolean;
  withAccount: boolean;
  withContacts: boolean;
  withMenu: boolean;
}

export const Base = ({
  withLinkToMain,
  withWhyNew,
  withAccount,
  withContacts,
  withMenu,
}: IBaseProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const menu = useMemo(() => {
    const staticItems = [
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
    ];
    const themeItem =
      theme === "light"
        ? {
            title: "Тёмная тема",
            onClick: () => setTheme("dark"),
            icon: <MoonIcon fill="#636AFF" />,
          }
        : {
            title: "Светлая тема",
            onClick: () => setTheme("light"),
            icon: <SunIcon />,
          };

    return [...staticItems, themeItem];
  }, [theme]);

  const contacts = useMemo(() => {
    return {
      availableTime: <AvailableTime />,
      phones: [
        {
          phone: "84952151198",
          title: "8 (495) 215-11-98",
          label: "Москва",
        },
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
    };
  }, []);

  const whyNew = useMemo(() => {
    return {
      link: "https://kirk.cherehapa.ru/",
      title: "Почему всё новое?",
    };
  }, []);

  return (
    <div
      style={{
        height: `${window.innerHeight}px`,
        background: `url("${bg}")`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Container>
        <Header
          linkToMain={withLinkToMain ? "https://kirk.cherehapa.ru/" : undefined}
          whyNew={withWhyNew ? whyNew : undefined}
          accountLink={
            withAccount ? "https://www.cherehapa.ru/account/login" : undefined
          }
          contacts={withContacts ? contacts : undefined}
          menu={withMenu ? menu : undefined}
        />
        <MockFiltersBlock />
      </Container>
    </div>
  );
};

Base.args = {
  withLinkToMain: true,
  withWhyNew: true,
  withAccount: true,
  withContacts: true,
  withMenu: true,
};
