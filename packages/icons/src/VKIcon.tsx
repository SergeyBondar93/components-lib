import { FC } from "react";

import { SvgIcon } from "./types";

export const VKIcon: FC<SvgIcon> = ({
  width = 20,
  height = 12,
  fill = "#636AFF",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5413 0.812571C19.6796 0.344571 19.5413 0 18.8788 0H16.6913C16.1347 0 15.878 0.297429 15.7388 0.625714C15.7388 0.625714 14.6264 3.36514 13.0506 5.14457C12.5406 5.66057 12.3089 5.82429 12.0306 5.82429C11.8914 5.82429 11.6823 5.66057 11.6823 5.19171V0.812571C11.6823 0.250286 11.5289 0 11.0656 0H7.62567C7.27818 0 7.06902 0.260571 7.06902 0.508286C7.06902 1.04057 7.85734 1.164 7.93817 2.66229V5.91771C7.93817 6.63171 7.81067 6.76114 7.53234 6.76114C6.79069 6.76114 4.98656 4.00886 3.91575 0.859714C3.70826 0.246857 3.49826 0 2.93911 0H0.749984C0.124997 0 0 0.297429 0 0.625714C0 1.21029 0.741651 4.11429 3.45409 7.95514C5.26239 10.578 7.80817 12 10.1273 12C11.5181 12 11.6898 11.6846 11.6898 11.1403V9.15771C11.6898 8.526 11.8214 8.4 12.2622 8.4C12.5872 8.4 13.1431 8.56457 14.4414 9.82886C15.9247 11.328 16.1688 12 17.0038 12H19.1913C19.8163 12 20.1296 11.6846 19.9496 11.0606C19.7513 10.44 19.0429 9.53914 18.1038 8.47029C17.5938 7.86171 16.8288 7.206 16.5963 6.87771C16.2722 6.45686 16.3647 6.26914 16.5963 5.89457C16.5963 5.89457 19.2629 2.10086 19.5404 0.812571H19.5413Z"
        fill={fill}
      />
    </svg>
  );
};
