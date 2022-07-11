import { TAG_COMPONENTS_NAMES, TAG_COMPONENT_NAMESPACE } from "../src";

export const theme = {
  components: {
    [TAG_COMPONENT_NAMESPACE]: {
      base: {
        [TAG_COMPONENTS_NAMES.wrapper]: {
          margin: "20px",
          padding: "25px",
          borderRadius: "15px",
          transition: "0.3s",
          "&:hover": {
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(243,243,255,1) 50%, rgba(193,195,255,1) 100%)",
          },
        },
      },
      custom: {
        [TAG_COMPONENTS_NAMES.wrapper]: {
          color: "aliceblue",
          background:
            "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(208,194,255,1) 50%, rgba(22,22,96,1) 100%)",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(36,0,0,1) 0%, rgba(208,194,255,1) 50%, rgba(96,22,22,1) 100%)",
          },
        },
      },
    },
  },
};
