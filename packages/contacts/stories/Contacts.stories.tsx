import { TelegramIcon } from "@cheaaa/icons/TelegramIcon";
import { TwitterIcon } from "@cheaaa/icons/TwitterIcon";
import { VKIcon } from "@cheaaa/icons/VKIcon";
import { WhatsupIcon } from "@cheaaa/icons/WhatsupIcon";
import { Meta } from "@storybook/react";
import { useMemo } from "react";

import { Contacts } from "../src";

export default {
  title: "Contacts",
} as Meta;

const AvailableTime = () => {
  return (
    <>
      <span>Пн-Пт: 08:00-00:00</span>
      <br />
      <span>Сб-Вс: 09:00-21:00</span>
    </>
  );
};

export const BaseTemplate = () => {
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

  return <Contacts contacts={contacts} />;
};
