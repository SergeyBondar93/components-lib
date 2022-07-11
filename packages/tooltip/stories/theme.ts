import {
  TOOLTIP_COMPONENTS_NAMES,
  TOOLTIP_COMPONENT_NAMESPACE,
} from "./../src";
import ArrowIcon from "./ArrowIcon.svg";
export const theme = {
  components: {
    [TOOLTIP_COMPONENT_NAMESPACE]: {
      base: {
        [TOOLTIP_COMPONENTS_NAMES.body]: {
          "&.show": {
            opacity: "1!important",
          },
          background: "#41CC78!important",
          fontSize: "20px",
          "&:after": {
            backgroundImage: `url(${ArrowIcon})`,
          },
        },
      },
    },
  },
};
