import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const ChevronUpIcon: FC<SvgIcon> = memo(
  ({ width = 54, height = 12, stroke = "#FFF", ...props }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.55"
        d="M2 10L27 2L52 10"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
