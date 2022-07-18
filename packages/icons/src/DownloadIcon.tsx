import { FC } from "react";

import { SvgIcon } from "./types";

export const DownloadIcon: FC<SvgIcon> = ({
  width = 15,
  height = 18,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 0.5C6.50077 0.5 5.83461 1.24153 5.83461 2.34774V10.109L5.92649 12.1634L4.68606 10.5831L2.75651 8.51656C2.4464 8.18834 2.07887 7.93306 1.56202 7.93306C0.677642 7.93306 0 8.62596 0 9.62277C0 10.0847 0.183767 10.5223 0.516845 10.8749L6.28254 16.9894C6.56968 17.3055 7.05207 17.5 7.5 17.5C7.94793 17.5 8.41884 17.3055 8.71746 16.9894L14.4832 10.8749C14.8277 10.5223 15 10.0847 15 9.62277C15 8.62596 14.3224 7.93306 13.438 7.93306C12.9211 7.93306 12.5536 8.18834 12.255 8.51656L10.3025 10.5831L9.06202 12.1634L9.1539 10.109V2.34774C9.1539 1.24153 8.48775 0.5 7.5 0.5Z"
        fill="url(#paint0_linear_3261_9402)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3261_9402"
          x1="7.5"
          y1="0.5"
          x2="7.5"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.6875" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.75" />
        </linearGradient>
      </defs>
    </svg>
  );
};
