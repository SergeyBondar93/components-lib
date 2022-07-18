import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const CircleArrow: FC<SvgIcon> = memo(
  ({ height = 50, width = 52, fill = "#636AFF", ...props }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 52 50"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M1.43497 0.633529C5.02291 25.8226 27.0585 38.0577 50.0625 40.8397C50.4575 40.8883 50.7415 41.2561 50.6942 41.6613C50.6469 42.0664 50.2883 42.3577 49.8933 42.3092C26.2448 39.4506 3.6959 26.7412 0.00782776 0.846359C-0.0504227 0.443064 0.222649 0.067778 0.617668 0.00803067C1.01087 -0.0517167 1.37672 0.228367 1.43497 0.633529Z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M49.5461 41.5226C48.5231 40.7552 47.2288 39.8067 47.085 39.6947C43.1875 36.6588 39.9582 33.1655 37.1148 29.0672C36.8836 28.7348 36.9601 28.2718 37.2841 28.0347C37.6081 27.7975 38.0595 27.876 38.2907 28.2083C41.0468 32.1834 44.1778 35.5722 47.9587 38.5166C48.179 38.6884 51.0898 40.8187 51.6468 41.2948C51.8762 41.489 51.9471 41.672 51.9599 41.7168C52.0363 41.9521 51.9908 42.1369 51.9289 42.2713C51.8579 42.4226 51.6814 42.6429 51.3392 42.7549C50.9806 42.8707 50.1832 42.923 49.983 42.9529C46.963 43.4122 43.5534 43.6549 40.4497 44.5362C37.4897 45.3763 34.8047 46.7991 33.0827 49.6501C32.8733 49.9974 32.4274 50.1038 32.0888 49.8891C31.7502 49.6744 31.6464 49.217 31.8557 48.8697C33.7817 45.6825 36.7562 44.0488 40.0638 43.1097C43.1493 42.234 46.5279 41.9689 49.5461 41.5226Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  )
);
