import { Meta } from "@storybook/react";

import { Container } from "../src";

export default {
  title: "Container",
} as Meta;

export const Base = () => {
  return (
    <>
      <Container>
        This is just a block for all components in a page width predefined width{" "}
      </Container>
    </>
  );
};
