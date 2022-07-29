import { MouseEvent } from "react";

export type OnClickFn = (event: MouseEvent<HTMLButtonElement>) => void;

export type onRenderFn = (params: {
  left: number;
  width: number;
  panelName: string;
}) => void;
