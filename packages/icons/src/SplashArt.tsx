import { FC } from "react";

import { SvgIcon } from "./types";

export const SplashArt: FC<SvgIcon> = ({
  height = 29,
  width = 34,
  fill = "#636AFF",
  ...props
}) => (
  <svg
    fill="none"
    height={height}
    viewBox="0 0 34 29"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M30.8622 10.0338C30.0796 7.45572 29.6848 4.75652 29.3231 2.13813C29.2473 1.57417 29.6704 1.05057 30.2666 1.01029C30.8631 0.92972 31.4087 1.33279 31.4845 1.85646C31.8327 4.39429 32.2053 7.01245 32.9587 9.46971C33.1221 9.99339 32.7857 10.5576 32.207 10.7187C31.6288 10.8798 31.0261 10.5575 30.8622 10.0338Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M19.7663 17.8484C15.1859 13.6992 11.1952 9.02642 6.4919 4.95784C6.05264 4.59529 6.02911 3.95077 6.43917 3.54794C6.84966 3.14511 7.53992 3.10498 7.97918 3.50781C12.6959 7.57639 16.6998 12.2492 21.2937 16.3984C21.7224 16.8012 21.7285 17.4456 21.3067 17.8484C20.8853 18.2109 20.1951 18.2512 19.7663 17.8484Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M2.14858 25.6235C4.77016 25.7444 7.39175 25.865 10.0138 25.9859C10.6143 25.9859 11.0779 26.4695 11.0487 27.0334C11.0191 27.5974 10.5079 28 9.90701 28C7.28107 27.8792 4.65556 27.7585 2.03005 27.6377C1.42956 27.5974 0.968952 27.1139 1.00164 26.55C1.03432 26.0263 1.54853 25.5833 2.14858 25.6235Z"
      fill={fill}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M30.8622 10.0338C30.0796 7.45572 29.6848 4.75652 29.3231 2.13813C29.2473 1.57417 29.6704 1.05057 30.2666 1.01029C30.8631 0.92972 31.4087 1.33279 31.4845 1.85646C31.8327 4.39429 32.2053 7.01245 32.9587 9.46971C33.1221 9.99339 32.7857 10.5576 32.207 10.7187C31.6288 10.8798 31.0261 10.5575 30.8622 10.0338Z"
      fillRule="evenodd"
      stroke={fill}
      strokeWidth="0.5"
    />
    <path
      clipRule="evenodd"
      d="M19.7663 17.8484C15.1859 13.6992 11.1952 9.02642 6.4919 4.95784C6.05264 4.59529 6.02911 3.95077 6.43917 3.54794C6.84966 3.14511 7.53992 3.10498 7.97918 3.50781C12.6959 7.57639 16.6998 12.2492 21.2937 16.3984C21.7224 16.8012 21.7285 17.4456 21.3067 17.8484C20.8853 18.2109 20.1951 18.2512 19.7663 17.8484Z"
      fillRule="evenodd"
      stroke={fill}
      strokeWidth="0.5"
    />
    <path
      clipRule="evenodd"
      d="M2.14858 25.6235C4.77016 25.7444 7.39175 25.865 10.0138 25.9859C10.6143 25.9859 11.0779 26.4695 11.0487 27.0334C11.0191 27.5974 10.5079 28 9.90701 28C7.28107 27.8792 4.65556 27.7585 2.03005 27.6377C1.42956 27.5974 0.968952 27.1139 1.00164 26.55C1.03432 26.0263 1.54853 25.5833 2.14858 25.6235Z"
      fillRule="evenodd"
      stroke={fill}
      strokeWidth="0.5"
    />
  </svg>
);

export default SplashArt;
