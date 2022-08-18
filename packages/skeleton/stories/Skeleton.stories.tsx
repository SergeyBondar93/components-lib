import { Meta } from "@storybook/react";

import { Skeleton } from "../src";

export default {
  title: "Skeleton",
} as Meta;

const Title = ({ children }) => {
  return <h3 style={{ margin: "10px 0px" }}>{children}</h3>;
};

export const BaseTemplate = ({ borderRadius }) => {
  return (
    <div
      style={{ maxWidth: "100%", border: "1px solid black", padding: "20px" }}
    >
      <Title>Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="30px"
        animated
        borderRadius={borderRadius}
      />
      <Title>Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="80px"
        animated
        borderRadius={borderRadius}
      />
      <Title>Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="120px"
        animated
        borderRadius={borderRadius}
      />
      <Title>Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="150px"
        animated
        borderRadius={borderRadius}
      />
      <Title>Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="180px"
        animated
        borderRadius={borderRadius}
      />
      <Title>Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="250px"
        animated
        borderRadius={borderRadius}
      />
      <Title>Animated Should fit content</Title>
      <Skeleton
        height="30px"
        animated
        shouldFitContent
        borderRadius={borderRadius}
      />
      <Title>Not Animated Fix width</Title>
      <Skeleton
        height="30px"
        width="250px"
        animated={false}
        borderRadius={borderRadius}
      />
      <Title>Not Animated Should fit content</Title>
      <Skeleton
        height="30px"
        animated={false}
        shouldFitContent
        borderRadius={borderRadius}
      />
    </div>
  );
};

BaseTemplate.args = {
  borderRadius: 7,
};
