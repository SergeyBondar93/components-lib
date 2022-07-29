import { TABS_COMPONENTS_NAMES, TABS_COMPONENT_NAMESPACE } from "../src";

export const theme = {
  components: {
    [TABS_COMPONENT_NAMESPACE]: {
      verticalTabsList: {
        [TABS_COMPONENTS_NAMES.highlighter]: {
          display: "none",
        },
        [TABS_COMPONENTS_NAMES.TabsList]: {
          flexDirection: "column",
          borderRadius: "12px",
          background: "#FFF",
          padding: "5px",
        },
        [TABS_COMPONENTS_NAMES.tabLabel]: {
          borderRadius: "8px",
          padding: "8px",
          color: "#636AFF",
          marginLeft: "0px",
          '&[data-selected="true"]': {
            color: "#636AFF",
            background: "#EDF4FE",
          },
        },
      },
    },
  },
};
