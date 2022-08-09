import { Meta, Story } from "@storybook/react";
// @ts-ignore
import { Container } from "@cheaaa/container";

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

export const Base: Story<IBaseStoryParams> = ({ locale = "ru" }) => {
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
        <Container>
          <Footer {...props[locale]} />
        </Container>
      </div>
    </div>
  );
};
