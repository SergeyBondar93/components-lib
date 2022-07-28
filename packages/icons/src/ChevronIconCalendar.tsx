import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const ChevronIconCalendar: FC<SvgIcon> = memo(
  ({ width = 27, height = 34, stroke = "#636AFF", ...props }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 27 34"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 24L10 17L15.5 10"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
);
