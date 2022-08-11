import { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { Footer } from "../src/Footer";

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

interface IBaseStoryParams {
  variant: "full" | "lite";
}

export const Base: Story<IBaseStoryParams> = ({ variant }) => {
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
            width: "100%",
            backgroundColor: "#FFF",
          }}
        >
          <Footer
            info={info}
            contacts={contacts}
            variant={variant}
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
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

Base.args = {
  variant: "full",
};
