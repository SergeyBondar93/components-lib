import { Meta, Story } from "@storybook/react";

import { Footer } from "../src/Footer";

// @ts-ignore
import bg from "./bg.jpg";
import { contacts, info, navigationSections } from "./footerConfig";

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
          position: "fixed",
          bottom: "0px",
          backgroundColor: "#FFF",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Footer
          info={info}
          contacts={contacts}
          variant={variant}
          navigationSections={navigationSections}
        />
      </div>
    </div>
  );
};

Base.args = {
  variant: "full",
};
