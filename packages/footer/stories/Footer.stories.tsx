import { Meta } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { FooterFull, FooterLite } from "../src";

// @ts-ignore
import bg from "./bg.jpg";
import { contacts, info, navigationSections } from "./footerConfig";
import { theme } from "./theme";

export default {
  title: "Footer",
  argTypes: {
    variant: {
      control: "select",
      options: ["full", "lite"],
    },
  },
} as Meta;

export const Lite = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: `${window.innerHeight}px`,
          background: `url("${bg}")`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "100vh",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#FFF",
          }}
        >
          <FooterLite info={info} contacts={contacts} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export const Full = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: `${window.innerHeight}px`,
          background: `url("${bg}")`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "100vh",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#FFF",
          }}
        >
          <FooterFull
            info={info}
            contacts={contacts}
            navigationSections={navigationSections}
            componentsProps={{
              navigationAccordions: {
                appearance: "navigation",
                titleButtonProps: {
                  baseAppearance: "navigation",
                },
              },
              hiddenOptionsAccordion: {
                appearance: "navigationHiddenOptions",
                titleButtonProps: {
                  baseAppearance: "navigationHiddenOptions",
                },
              },
              signInAccountButton: {
                appearance: "text",
              },
            }}
            becomePartnerLink="https://www.cherehapa.ru/account/login"
            signInAccountLink="https://www.cherehapa.ru/account/login"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};
