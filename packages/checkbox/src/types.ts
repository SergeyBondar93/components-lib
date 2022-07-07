import { MouseEvent } from "react";

export type OnClickFn = (
  event: MouseEvent<HTMLButtonElement>,
  value: string
) => void;

export type onRenderFn = (params: {
  left: number;
  width: number;
  panelName: string;
}) => void;
