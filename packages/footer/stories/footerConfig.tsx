import { TelegramIcon } from "@cheaaa/icons/TelegramIcon";
import { TwitterIcon } from "@cheaaa/icons/TwitterIcon";
import { VKIcon } from "@cheaaa/icons/VKIcon";
import { WhatsupIcon } from "@cheaaa/icons/WhatsupIcon";

import { NavigationSections } from "../src";

export const info = {
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

const AvailableTime = () => {
  return (
    <>
      <span>Пн-Пт: 08:00-00:00</span>
      <br />
      <span>Сб-Вс: 09:00-21:00</span>
    </>
  );
};

export const navigationSections: NavigationSections = [
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
    title: "Другие страны",
    links: [
      {
        title: "Беларусь",
        href: "https://kirk.cherehapa.ru/country/belarus",
      },
      {
        title: "Германия",
        href: "https://kirk.cherehapa.ru/country/germany",
      },
      {
        title: "Казахстан",
        href: "https://kirk.cherehapa.ru/country/kazakhstan",
      },
      {
        title: "Китай",
        href: "https://kirk.cherehapa.ru/country/china",
      },
      {
        title: "Латвия",
        href: "https://kirk.cherehapa.ru/country/latvia",
      },
      {
        title: "Литва",
        href: "https://kirk.cherehapa.ru/country/lithuania",
      },
      {
        title: "Польша",
        href: "https://kirk.cherehapa.ru/country/poland",
      },
      {
        title: "Португалия",
        href: "https://kirk.cherehapa.ru/country/portugal",
      },
      {
        title: "США",
        href: "https://kirk.cherehapa.ru/country/usa",
      },
      {
        title: "Узбекистан",
        href: "https://kirk.cherehapa.ru/country/uzbekistan",
      },
      {
        title: "Украина",
        href: "https://kirk.cherehapa.ru/country/ukraine",
      },
      {
        title: "Финляндия",
        href: "https://kirk.cherehapa.ru/country/finland",
      },
      {
        title: "Франция",
        href: "https://kirk.cherehapa.ru/country/france",
      },
      {
        title: "Швейцария",
        href: "https://kirk.cherehapa.ru/country/switzerland",
      },
      {
        title: "Южная Корея",
        href: "https://kirk.cherehapa.ru/country/korea",
      },
      {
        title: "Япония",
        href: "https://kirk.cherehapa.ru/country/japan",
      },
    ],
  },
  {
    title: "Опции",
    links: [
      {
        title: "Страховка детям",
        href: "https://kirk.cherehapa.ru/insurance/children",
      },
      {
        title: "Медицинская страховка",
        href: "https://kirk.cherehapa.ru/insurance/medicine",
      },
      {
        title: "Страхование от несчастных случаев",
        href: "https://kirk.cherehapa.ru/insurance/ns",
      },
      {
        title: "Страхование беременных",
        href: "https://kirk.cherehapa.ru/insurance/pregnants",
      },
      {
        title: "Страховка в Шенген",
        href: "https://kirk.cherehapa.ru/country/schengen",
      },
      {
        title: "Спорт и активный отдых",
        href: "https://kirk.cherehapa.ru/insurance/sport",
      },
    ],
  },
  {
    title: "Меню",
    links: [
      {
        title: "Блог",
        href: "https://kirk.cherehapa.ru/blog",
      },
      {
        title: "Контакты",
        href: "https://kirk.cherehapa.ru/contacts",
      },
      {
        title: "Наша команда",
        href: "https://kirk.cherehapa.ru/#",
      },
      {
        title: "Полезная информация",
        href: "https://kirk.cherehapa.ru/info",
      },
      {
        title: "Партнёрская программа",
        href: "https://partners.cherehapa.ru/",
      },
      {
        title: "О компании",
        href: "https://kirk.cherehapa.ru/#",
      },
    ],
  },
];

export const contacts = {
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
