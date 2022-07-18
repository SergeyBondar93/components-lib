import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const CalendarIcon: FC<SvgIcon> = memo(
  ({ width, height, fill, ...props }) => (
    <svg
      fill="none"
      height={height || "17"}
      viewBox="0 0 17 17"
      width={width || "17"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M2.83333 0C1.26853 0 0 1.26853 0 2.83333V14.1667C0 15.7315 1.26853 17 2.83333 17H14.1667C15.7315 17 17 15.7315 17 14.1667V2.83333C17 1.26853 15.7315 0 14.1667 0H2.83333ZM1.88889 14.1667V4.72222H15.1111V14.1667C15.1111 14.6883 14.6883 15.1111 14.1667 15.1111H2.83333C2.31173 15.1111 1.88889 14.6883 1.88889 14.1667Z"
        fill={fill || "#636AFF"}
        fillRule="evenodd"
      />
      <path
        d="M3.77778 7.55556C3.77778 7.03395 4.20062 6.61111 4.72222 6.61111H7.55556C8.07716 6.61111 8.5 7.03395 8.5 7.55556V9.44444C8.5 9.96605 8.07716 10.3889 7.55556 10.3889H4.72222C4.20062 10.3889 3.77778 9.96605 3.77778 9.44444V7.55556Z"
        fill={fill || "#636AFF"}
      />
    </svg>
  )
);
