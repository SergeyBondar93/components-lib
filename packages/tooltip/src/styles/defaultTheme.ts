import { ComponentTheme } from "@cheaaa/theme";

import { TOOLTIP_COMPONENTS_NAMES } from "./consts";
import { ComponentNames } from "./types";
import ArrowIcon from "./ArrowIcon.svg";

export const defaultTheme: Required<ComponentTheme<ComponentNames>> = {
  [TOOLTIP_COMPONENTS_NAMES.body]: {
    "&.show": {
      opacity: "1!important",
    },
    padding: "12.5px 10px!important",
    background: `#636AFF!important`,
    color: "white!important",
    borderRadius: "8px!important",
    fontSize: "13px",
    lineHeight: 17.77 / 13,
    fontWeight: 400,
    letterSpacing: -0.45,
    maxWidth: 500,
    minHeight: 38,
    minWidth: 38,

    "&:after": {
      backgroundImage: `url("${ArrowIcon}")`,
      backgroundRepeat: "no-repeat",
      border: "none!important",
      width: "9px!important",
      height: "30px!important",
      margin: "0px!important",
    },
    "&.place-top": {
      "&:after": {
        transform: "translateX(-15px) rotate(-90deg)",
        bottom: "-19px!important",
      },
    },
    "&.place-right": {
      "&:after": {
        transform: "translateY(-50%)",
        left: "-9px!important",
      },
    },
    "&.place-bottom": {
      "&:after": {
        transform: "translateX(-50%) rotate(90deg)",
        top: "-19px!important",
      },
    },
    "&.place-left": {
      transform: "translateX(-10px)",
      "&:after": {
        transform: "translateY(-50%) rotate(180deg)",
        right: "-9px!important",
      },
    },
  },
};
