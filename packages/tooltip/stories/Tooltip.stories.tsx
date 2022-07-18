import { Meta } from "@storybook/react";
import { ThemeProvider } from "react-jss";

import { Tooltip } from "../src/Tooltip";

import { theme } from "./theme";
// import { ThemeProvider } from "react-jss";
// import { theme } from "./theme";

export default {
  title: "Tooltip",
} as Meta;

export const Base = () => {
  return (
    <div
      style={{
        marginTop: "200px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span data-tip data-for={"base"}>
        Tooltip Default
      </span>
      <Tooltip id={"base"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi illum
        dolorem placeat consequatur voluptatum ipsum nihil consequuntur
        expedita, consectetur eos possimus facilis eveniet iusto sint alias
        voluptatem minima laborum!
      </Tooltip>
      <span data-tip data-for={"right"}>
        Tooltip Right
      </span>
      <Tooltip place="right" id={"right"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi illum
        dolorem placeat consequatur voluptatum ipsum nihil consequuntur
        expedita, consectetur eos possimus facilis eveniet iusto sint alias
        voluptatem minima laborum!
      </Tooltip>
      <span data-tip data-for={"bottom"}>
        Tooltip Bottom
      </span>
      <Tooltip place="bottom" id={"bottom"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi illum
        dolorem placeat consequatur voluptatum ipsum nihil consequuntur
        expedita, consectetur eos possimus facilis eveniet iusto sint alias
        voluptatem minima laborum!
      </Tooltip>
      <span data-tip data-for={"Left"}>
        Tooltip Left
      </span>
      <Tooltip place="left" id={"Left"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi illum
        dolorem placeat consequatur voluptatum ipsum nihil consequuntur
        expedita, consectetur eos possimus facilis eveniet iusto sint alias
        voluptatem minima laborum!
      </Tooltip>
      <span data-tip data-for={"top"}>
        Tooltip Top
      </span>
      <Tooltip place="top" id={"top"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi illum
        dolorem placeat consequatur voluptatum ipsum nihil consequuntur
        expedita, consectetur eos possimus facilis eveniet iusto sint alias
        voluptatem minima laborum!
      </Tooltip>
    </div>
  );
};

export const Themed = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          marginTop: "200px",
        }}
      >
        <span data-tip data-for={"base"}>
          Tooltip
        </span>
        <Tooltip id={"base"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi
          illum dolorem placeat consequatur voluptatum ipsum nihil consequuntur
          expedita, consectetur eos possimus facilis eveniet iusto sint alias
          voluptatem minima laborum!
        </Tooltip>
      </div>
    </ThemeProvider>
  );
};

// export const Themed = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <BaseTemplate />
//       <br />
//       <Tag appearance="custom">Custom appearance</Tag>
//     </ThemeProvider>
//   );
// };
