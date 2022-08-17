import { Meta } from "@storybook/react";

import { Skeleton } from "../src";

export default {
  title: "Skeleton",
} as Meta;

const Title = ({ children }) => {
  return <h3 style={{ margin: "10px 0px" }}>{children}</h3>;
};

export const BaseTemplate = () => {
  return (
    <div
      style={{ maxWidth: "100%", border: "1px solid black", padding: "20px" }}
    >
      <Title>Animated Fix width</Title>
      <Skeleton height="30px" width="250px" animated />
      <Title>Animated Should fit content</Title>
      <Skeleton height="30px" animated shouldFitContent />
      <Title>Not Animated Fix width</Title>
      <Skeleton height="30px" width="250px" animated={false} />
      <Title>Not Animated Should fit content</Title>
      <Skeleton height="30px" animated={false} shouldFitContent />
    </div>
  );
};
