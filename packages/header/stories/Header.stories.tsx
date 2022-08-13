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
        <div
          style={{
            height: "500px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora alias
          animi dolorum quo doloribus, sapiente ipsam ad. Atque facilis sunt
          similique quibusdam impedit nihil deserunt expedita, ipsa commodi aut
          sed ut nisi a minima accusantium ducimus vero facere eos eum, illo
          excepturi id ipsam? Velit molestias ullam odit? Sed dicta consectetur
          odio voluptate, sit blanditiis? Dolorem omnis corporis deserunt fugiat
          praesentium atque officia culpa dolor quia voluptas provident, nihil
          officiis. Dolore a minus magnam molestias necessitatibus rerum odit
          quia harum cumque commodi, vitae inventore nulla maiores optio,
          cupiditate minima voluptatem culpa corporis. Nesciunt doloribus
          placeat aspernatur temporibus nulla aliquid vitae ad eius sapiente
          odit ratione iste eum repellendus nemo quibusdam laboriosam possimus
          reiciendis, commodi fuga minima quisquam delectus, magni dignissimos?
          Laudantium facilis, pariatur repellendus nisi facere suscipit quod
          minima. Nesciunt, accusantium. Ipsum quo natus eveniet veniam
          repellendus aut ut error eligendi reprehenderit porro sint facilis
          labore est ducimus rem quae voluptates, saepe sunt corporis autem
          necessitatibus pariatur! Placeat quidem quis illum veniam corrupti
          laborum aliquam porro, aliquid quo exercitationem eaque eveniet magni!
          Blanditiis officiis veniam iusto ratione reiciendis dolor accusantium
          alias maiores repellat molestias. Cumque maxime veniam amet, id
          asperiores blanditiis magnam obcaecati exercitationem perspiciatis
          molestias accusantium laudantium odio suscipit mollitia tenetur.
          Quisquam rem animi quod saepe. Numquam soluta sit rem sed consequuntur
          non eos molestiae sunt eius minima, suscipit incidunt veritatis
          quisquam nam facere dolores placeat exercitationem blanditiis
          excepturi distinctio. Illo numquam nam quod ipsa placeat expedita
          magnam velit ducimus? Impedit delectus dolores accusamus suscipit
          explicabo facere ex, illo saepe, eveniet cumque odit magnam ut.
          Officia porro est corporis reiciendis id, dolorem modi recusandae
          magni quia ipsa soluta quo temporibus dolor inventore omnis, provident
          voluptatibus! Id, aperiam qui. Fugiat eaque doloremque possimus dicta
          incidunt accusamus atque cumque nihil, eius id aliquid temporibus
          dolores quisquam harum. Placeat fuga repellat itaque cupiditate
          fugiat, dolorum nostrum corporis obcaecati veniam sint adipisci animi
          voluptatibus! Asperiores, necessitatibus? Corrupti similique sunt
          minus tempora, ipsa deserunt fuga adipisci, dolorum error magni
          laboriosam eligendi, quidem ullam id reiciendis ea. Repellat vitae
          dicta perspiciatis earum error, neque suscipit ullam odio id nisi
          voluptas ut maxime adipisci. Enim non nam esse eligendi accusantium
          eveniet deleniti eius voluptatibus natus corrupti eos, at odio quia ab
          porro voluptate labore dolores, placeat nisi qui sit corporis.
          Voluptate, sit error! Quasi, incidunt. Enim exercitationem recusandae
          vero quae ratione amet ex qui. Expedita, quod voluptatem, alias
          ducimus maxime iure itaque, consequuntur enim soluta animi laboriosam.
          A eveniet quibusdam esse tempora inventore doloribus saepe ducimus
          culpa tempore sint error, nam accusantium sapiente dicta libero odio
          porro. Provident fuga sunt voluptatem in ad delectus qui excepturi
          reprehenderit, voluptate modi, quas praesentium corrupti! Minus
          quibusdam pariatur, sunt suscipit fugiat ad qui blanditiis repellat
          temporibus autem nisi accusamus nesciunt iste expedita vitae hic velit
          dolore nemo enim placeat adipisci provident? Sapiente, similique quo
          adipisci assumenda necessitatibus provident quasi ducimus earum
          asperiores vitae commodi quis iure tempore quibusdam fugit omnis quia
          distinctio consequuntur aliquam dolore suscipit alias deserunt.
          Recusandae, quos facilis explicabo amet officia quisquam aliquid nihil
          aspernatur voluptas? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Hic suscipit quidem quasi soluta officia tenetur
          ipsum beatae delectus voluptates voluptate voluptas reprehenderit
          eligendi at omnis amet, nobis distinctio molestias in. Laudantium amet
          tempora saepe asperiores beatae dolore facilis, explicabo repellat
          perspiciatis vero? Tempora, maxime id! Earum delectus illum ducimus,
          nobis labore ipsam. Exercitationem, mollitia consectetur! Consequatur
          placeat nostrum obcaecati repudiandae ullam quos excepturi eveniet
          totam? Itaque enim aliquid ipsum. Voluptas corrupti labore veritatis
          veniam enim, dolorum iusto nulla iste quaerat doloribus recusandae
          saepe excepturi. Magnam hic maxime inventore sed assumenda, neque
          voluptatem veniam. Exercitationem blanditiis sequi natus adipisci
          nostrum totam voluptates provident ipsum, repudiandae eius animi
          reiciendis laborum consectetur ab odit quidem eum vero asperiores
          molestiae debitis officia suscipit esse? Voluptates provident,
          laudantium iure aperiam nesciunt sapiente enim quod, vitae neque
          excepturi corporis recusandae ea molestias magnam eius ullam quia
          velit facere expedita autem quas placeat pariatur. Cumque animi
          expedita placeat consectetur, magni excepturi cupiditate sit hic et
          necessitatibus nam laudantium nostrum officia possimus sunt eligendi
          cum aliquid libero nemo ut optio illo ipsa eum. Earum quae ea a. At
          quos iusto voluptates molestiae neque eligendi odit ea in illo
          consequatur sunt veritatis non autem rerum atque corporis, sint,
          assumenda ad voluptate laudantium, laboriosam nostrum! Molestias
          facilis ipsam provident maiores quam quibusdam perferendis qui
          assumenda atque. Voluptates culpa impedit molestias quia omnis, ea
          adipisci cupiditate laboriosam inventore, quo, aliquid amet soluta!
          Reprehenderit earum vel voluptatum, dignissimos quisquam consequuntur
          optio perferendis blanditiis expedita nesciunt asperiores dolores nisi
          dolor repellendus iusto omnis accusamus similique ad fugit velit
          repellat! Sint dicta culpa odit minus eos, accusantium aliquam? Itaque
          ratione ipsa iste error possimus doloribus repudiandae amet?
          Repellendus culpa nulla consequuntur delectus at animi quibusdam!
          Veniam, ratione voluptate. Quod necessitatibus incidunt, consequuntur
          ab, vitae sunt deleniti, aliquid fuga ea cum natus illo dolorem autem
          facere facilis cupiditate? Dolorem cum sapiente voluptates harum
          aliquid cupiditate illo magni reprehenderit ut explicabo nobis fugit
          error odio provident, a porro ipsam quas fuga aperiam? Omnis facilis
          molestiae, doloremque magni, praesentium animi sunt aperiam voluptate
          qui optio cumque dolore voluptates debitis perferendis. Maiores fugit
          provident quos harum, recusandae, delectus voluptates voluptatibus at
          commodi facilis, rerum eos enim iure? Quasi recusandae aliquam minima
          incidunt ea voluptas minus dignissimos itaque illo, delectus, quis
          quibusdam magni. Perferendis mollitia porro quos omnis provident
          fugiat maxime molestiae laborum reprehenderit incidunt repellat,
          aperiam, sunt ratione, harum exercitationem numquam impedit voluptas!
          Perspiciatis, beatae. Minima nulla eos nihil. Ea perferendis ducimus
          quaerat voluptatem tempore nostrum qui iusto dicta, nulla soluta?
          Repellendus ratione voluptatum tempore reiciendis, maiores porro sint
          rem optio est doloremque quo nostrum omnis eaque dolorum placeat, vel
          officia voluptates. Exercitationem pariatur nisi nemo error voluptatum
          similique repellat repudiandae ipsam? Nisi necessitatibus cupiditate
          vero nihil culpa porro eaque sit distinctio quaerat iste dolorem nam
          saepe blanditiis eligendi ipsa assumenda praesentium, accusamus vel
          odio quam voluptatibus ducimus ea commodi est. Vel soluta reiciendis
          voluptas cupiditate! Aperiam placeat explicabo perspiciatis minima
          adipisci. Natus doloremque id eligendi impedit, veniam cupiditate
          itaque nihil animi incidunt quam quae et nostrum numquam.
        </div>
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
