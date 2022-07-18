import { FC } from "react";

import { SvgIcon } from "./types";

// TODO другая иконка содержит лишние паддинги, эта без них и она более правильная.
// необходимо убрать ту убрав из всех компонентов где она используется и заменив на эту попрвив возможно стили
export const ChevronIconFinal: FC<SvgIcon> = ({
  width = 11,
  height = 20,
  stroke = "#636AFF",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 2L1.70711 9.29289C1.31658 9.68342 1.31658 10.3166 1.70711 10.7071L9 18"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
