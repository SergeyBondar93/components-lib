import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const TriangleIcon: FC<SvgIcon> = memo(
  ({
    width = 17,
    height = 17,
    fill = "#636AFF",
    fillOpacity = 1,
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
        d="M7.80568 11.2347C8.17649 11.5884 8.82351 11.5884 9.19432 11.2347L12.7593 7.83382C13.2988 7.31909 12.8724 6.5 12.0649 6.5H4.93506C4.12756 6.5 3.70118 7.31909 4.24074 7.83382L7.80568 11.2347Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </svg>
  )
);
