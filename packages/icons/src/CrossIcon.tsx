import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const CrossIcon: FC<SvgIcon> = memo(
  ({
    width = 17,
    height = 17,
    fill = "#636AFF",
    fillOpacity,
    stroke = "#DDE3FE",
    strokeWidth = 0.2,
    ...props
  }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 17 17"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.61856 8.39393L6.72463 8.5L6.61856 8.60607L1.51899 13.7056C1.03116 14.1935 1.03057 14.989 1.51923 15.4812C2.01123 15.973 2.80245 15.9729 3.29436 15.481L8.39393 10.3814L8.5 10.2754L8.60607 10.3814L13.7056 15.481C14.1976 15.973 14.989 15.973 15.481 15.481C15.973 14.989 15.973 14.1976 15.481 13.7056L10.3814 8.60607L10.2754 8.5L10.3814 8.39393L15.481 3.29436C15.973 2.80238 15.973 2.01098 15.481 1.51899C14.989 1.027 14.1976 1.027 13.7056 1.51899L8.60607 6.61856L8.5 6.72463L8.39393 6.61856L3.29436 1.51899C2.80237 1.027 2.01098 1.027 1.51899 1.51899C1.027 2.01098 1.027 2.80238 1.51899 3.29436L6.61856 8.39393Z"
        fill={fill}
        fillOpacity={fillOpacity}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
);
