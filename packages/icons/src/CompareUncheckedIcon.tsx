import { FC } from "react";

import { SvgIcon } from "./types";

export const CompareUncheckedIcon: FC<SvgIcon> = ({
  width = 19,
  height = 19,
  fill = "#718299",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8C15.5523 8 16 7.55228 16 7V5H18C18.5523 5 19 4.55228 19 4C19 3.44772 18.5523 3 18 3H16V1C16 0.44772 15.5523 0 15 0C14.4477 0 14 0.44772 14 1V3H12C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5H14V7C14 7.55228 14.4477 8 15 8ZM1 19C0.44772 19 0 18.5523 0 18C0 17.4477 0.44772 17 1 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H1ZM1 13C0.44772 13 0 12.5523 0 12C0 11.4477 0.44772 11 1 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H1ZM0 6C0 5.44772 0.44772 5 1 5H8.7778C9.3301 5 9.7778 5.44772 9.7778 6C9.7778 6.55228 9.3301 7 8.7778 7H1C0.44772 7 0 6.55228 0 6Z"
        fill={fill}
        fillOpacity="0.35"
      />
    </svg>
  );
};
