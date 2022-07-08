import { BLANKET_COMPONENTS_NAMES } from "./consts";
import { BlanketTheme } from "./types";

export const defaultBlanketStyles: BlanketTheme = {
  [BLANKET_COMPONENTS_NAMES.overlay]: {
    top: "0px",
    left: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: "3",
    transitionProperty: "background, opacity",
  },
};
