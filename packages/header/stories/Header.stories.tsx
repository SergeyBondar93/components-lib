import { Meta } from "@storybook/react";
// @ts-ignore
import { Container } from "@cheaaa/container";

import { Header } from "../src/Header";

// @ts-ignore
import bg from "./bg.jpg";

export default {
  title: "Header",
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#d2ecf6" }],
    },
    paddings: {
      values: [{ name: "none", value: "0px" }],
      default: "none",
    },
  },
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

export const Base = () => {
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
        <Header />
        <MockFiltersBlock />
      </Container>
    </div>
  );
};
