import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const NavArrowIcon: FC<SvgIcon> = memo(
  ({ width, height, fill = "#636AFF", stroke = "#FCFBFE", ...props }) => (
    <svg
      fill="none"
      height={height || "10"}
      viewBox="0 0 11 10"
      width={width || "11"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 7.06736V1.49482C10 0.904145 9.6114 0.5 9.01295 0.5L3.43264 0.507772C2.86529 0.507772 2.46114 0.943005 2.46114 1.44041C2.46114 1.9456 2.89637 2.3342 3.42487 2.3342H5.1658L7.02332 2.2487L6.02073 3.14249L1.31865 7.84456C1.10881 8.0544 1 8.30311 1 8.54404C1 9.03368 1.45855 9.5 1.95596 9.5C2.20466 9.5 2.4456 9.39896 2.66321 9.18912L7.36529 4.48705L8.2513 3.47668L8.1658 5.31865V7.07513C8.1658 7.6114 8.56218 8.03886 9.06736 8.03886C9.57254 8.03886 10 7.6114 10 7.06736Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.3"
      />
    </svg>
  )
);
