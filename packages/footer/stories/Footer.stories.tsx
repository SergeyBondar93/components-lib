import { Meta, Story } from "@storybook/react";
import { useMemo } from "react";
import { TelegramIcon, TwitterIcon, VKIcon, WhatsupIcon } from "@cheaaa/icons";

import { Footer } from "../src/Footer";

// @ts-ignore
import bg from "./bg.jpg";

export default {
  title: "Footer",
  argTypes: {
    locale: {
      control: "select",
      options: ["en", "ru"],
    },
  },
} as Meta;

interface IBaseStoryParams {
  locale: "en" | "ru";
  withContacts: boolean;
}

const rusProps = {
  companyName: "ООО «Черехапа Страхование»",
  copyright: {
    from: 2011,
    to: 2021,
    text: "При использовании материалов гиперссылка на cherehapa.ru обязательна.",
  },
  companyInfo: `Группа компаний «Черехапа Страхование» — официальный представитель
страховых компаний: АО СК «Альянс», АО «Совкомбанк страхование», ООО
«Абсолют Страхование», АО «АльфаСтрахование», ООО СК «Арсеналъ», САО
«ВСК», ООО «Зетта Страхование», СПАО «Ингосстрах», АО «Группа Ренессанс
Страхование», СПАО «РЕСО-Гарантия», АО «Русский Стандарт Страхование»,
ООО СК «Сбербанк Страхование», ООО СК «Согласие», АО «Тинькофф
Страхование», ПАО САК «Энергогарант»,АО «СК «ПАРИ», АО «СК
«Астро-Волга», ПАО СК «Росгосстрах» и др.`,
};

const engProps = {
  companyName: "«Cherehapa Insurance» LLC",
  copyright: {
    from: 2011,
    to: 2021,
    text: "When using materials, a hyperlink to cherehapa.ru required. All rights reserved.",
  },
  companyInfo: `Cheryokhapa Insurance Group of Companies is the official representative
  of insurance companies: JSC SK Alliance, JSC Sovcombank Insurance, LLC
  "Absolute Insurance", JSC "AlfaStrakhovanie", LLC IC "Arsenal", CAO
  "VSK", LLC "Zetta Insurance", SPAO "Ingosstrakh", JSC "Renaissance Group
  Insurance", SPAO "RESO-Garantia", JSC "Russian Standard Insurance",
  LLC SK "Sberbank Insurance", LLC SK "Consent", JSC "Tinkoff
  Insurance", PJSC SAK "Energogarant", JSC "IC "PARI", JSC "IC
  "Astro-Volga", PJSC IC "Rosgosstrakh", etc.`,
};

const props = {
  ru: rusProps,
  en: engProps,
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

const navigationSections = [
  {
    title: "Популярные страны",
    links: [
      {
        title: "Армения",
        href: "https://kirk.cherehapa.ru/country/armenia",
      },
      {
        title: "Болгария",
        href: "https://kirk.cherehapa.ru/country/bulgaria",
      },
      {
        title: "Венгрия",
        href: "https://kirk.cherehapa.ru/country/hungary",
      },
      {
        title: "Вьетнам",
        href: "https://kirk.cherehapa.ru/country/vietnam",
      },
      {
        title: "Греция",
        href: "https://kirk.cherehapa.ru/country/greece",
      },
      {
        title: "Израиль",
        href: "https://kirk.cherehapa.ru/country/israel",
      },
      {
        title: "Испания",
        href: "https://kirk.cherehapa.ru/country/spain",
      },
      {
        title: "Италия",
        href: "https://kirk.cherehapa.ru/country/italy",
      },
      {
        title: "Кипр",
        href: "https://kirk.cherehapa.ru/country/cyprus",
      },
      {
        title: "Таиланд",
        href: "https://kirk.cherehapa.ru/country/thailand",
      },
      {
        title: "Турция",
        href: "https://kirk.cherehapa.ru/country/turkey",
      },
      {
        title: "Хорватия",
        href: "https://kirk.cherehapa.ru/country/croatia",
      },
      {
        title: "Черногория",
        href: "https://kirk.cherehapa.ru/country/montenegro",
      },
      {
        title: "Чехия",
        href: "https://kirk.cherehapa.ru/country/czech",
      },
      {
        title: "Шри-Ланка",
        href: "https://kirk.cherehapa.ru/country/srilanka",
      },
    ],
  },
  {
    title: "Популярные страны",
    links: [
      {
        title: "Армения",
        href: "https://kirk.cherehapa.ru/country/armenia",
      },
      {
        title: "Болгария",
        href: "https://kirk.cherehapa.ru/country/bulgaria",
      },
      {
        title: "Венгрия",
        href: "https://kirk.cherehapa.ru/country/hungary",
      },
      {
        title: "Вьетнам",
        href: "https://kirk.cherehapa.ru/country/vietnam",
      },
      {
        title: "Греция",
        href: "https://kirk.cherehapa.ru/country/greece",
      },
      {
        title: "Израиль",
        href: "https://kirk.cherehapa.ru/country/israel",
      },
      {
        title: "Испания",
        href: "https://kirk.cherehapa.ru/country/spain",
      },
      {
        title: "Италия",
        href: "https://kirk.cherehapa.ru/country/italy",
      },
      {
        title: "Кипр",
        href: "https://kirk.cherehapa.ru/country/cyprus",
      },
      {
        title: "Таиланд",
        href: "https://kirk.cherehapa.ru/country/thailand",
      },
      {
        title: "Турция",
        href: "https://kirk.cherehapa.ru/country/turkey",
      },
      {
        title: "Хорватия",
        href: "https://kirk.cherehapa.ru/country/croatia",
      },
      {
        title: "Черногория",
        href: "https://kirk.cherehapa.ru/country/montenegro",
      },
      {
        title: "Чехия",
        href: "https://kirk.cherehapa.ru/country/czech",
      },
      {
        title: "Шри-Ланка",
        href: "https://kirk.cherehapa.ru/country/srilanka",
      },
    ],
  },
  {
    title: "Популярные страны",
    links: [
      {
        title: "Армения",
        href: "https://kirk.cherehapa.ru/country/armenia",
      },
      {
        title: "Болгария",
        href: "https://kirk.cherehapa.ru/country/bulgaria",
      },
      {
        title: "Венгрия",
        href: "https://kirk.cherehapa.ru/country/hungary",
      },
      {
        title: "Вьетнам",
        href: "https://kirk.cherehapa.ru/country/vietnam",
      },
      {
        title: "Греция",
        href: "https://kirk.cherehapa.ru/country/greece",
      },
      {
        title: "Израиль",
        href: "https://kirk.cherehapa.ru/country/israel",
      },
      {
        title: "Испания",
        href: "https://kirk.cherehapa.ru/country/spain",
      },
      {
        title: "Италия",
        href: "https://kirk.cherehapa.ru/country/italy",
      },
      {
        title: "Кипр",
        href: "https://kirk.cherehapa.ru/country/cyprus",
      },
      {
        title: "Таиланд",
        href: "https://kirk.cherehapa.ru/country/thailand",
      },
      {
        title: "Турция",
        href: "https://kirk.cherehapa.ru/country/turkey",
      },
      {
        title: "Хорватия",
        href: "https://kirk.cherehapa.ru/country/croatia",
      },
      {
        title: "Черногория",
        href: "https://kirk.cherehapa.ru/country/montenegro",
      },
      {
        title: "Чехия",
        href: "https://kirk.cherehapa.ru/country/czech",
      },
      {
        title: "Шри-Ланка",
        href: "https://kirk.cherehapa.ru/country/srilanka",
      },
    ],
  },
  {
    title: "Популярные страны",
    links: [
      {
        title: "Армения",
        href: "https://kirk.cherehapa.ru/country/armenia",
      },
      {
        title: "Болгария",
        href: "https://kirk.cherehapa.ru/country/bulgaria",
      },
      {
        title: "Венгрия",
        href: "https://kirk.cherehapa.ru/country/hungary",
      },
      {
        title: "Вьетнам",
        href: "https://kirk.cherehapa.ru/country/vietnam",
      },
      {
        title: "Греция",
        href: "https://kirk.cherehapa.ru/country/greece",
      },
      {
        title: "Израиль",
        href: "https://kirk.cherehapa.ru/country/israel",
      },
      {
        title: "Испания",
        href: "https://kirk.cherehapa.ru/country/spain",
      },
      {
        title: "Италия",
        href: "https://kirk.cherehapa.ru/country/italy",
      },
      {
        title: "Кипр",
        href: "https://kirk.cherehapa.ru/country/cyprus",
      },
      {
        title: "Таиланд",
        href: "https://kirk.cherehapa.ru/country/thailand",
      },
      {
        title: "Турция",
        href: "https://kirk.cherehapa.ru/country/turkey",
      },
      {
        title: "Хорватия",
        href: "https://kirk.cherehapa.ru/country/croatia",
      },
      {
        title: "Черногория",
        href: "https://kirk.cherehapa.ru/country/montenegro",
      },
      {
        title: "Чехия",
        href: "https://kirk.cherehapa.ru/country/czech",
      },
      {
        title: "Шри-Ланка",
        href: "https://kirk.cherehapa.ru/country/srilanka",
      },
    ],
  },
];

export const Base: Story<IBaseStoryParams> = ({
  locale = "ru",
  // withContacts,
}) => {
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
      socialNetworks: [
        {
          icon: <VKIcon />,
          link: "",
        },
        {
          icon: <TwitterIcon />,
          link: "",
        },
        {
          icon: <TelegramIcon />,
          link: "",
        },
        {
          icon: <WhatsupIcon />,
          link: "",
        },
      ],
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
      <div
        style={{
          width: "100%",
          padding: "25px 0px",
          position: "fixed",
          bottom: "0px",
          backgroundColor: "#FFF",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Footer
          {...props[locale]}
          contacts={contacts}
          variant="lite"
          navigationSections={navigationSections}
        />
      </div>
    </div>
  );
};

Base.args = {
  withContacts: true,
};
