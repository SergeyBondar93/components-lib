import { Meta } from "@storybook/react";
// @ts-ignore
import { Container } from "@cheaaa/container";

import { Footer } from "../src/Footer";

// @ts-ignore
import bg from "./bg.jpg";

export default {
  title: "Footer",
} as Meta;

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
          <Footer />
        </Container>
      </div>
    </div>
  );
};
