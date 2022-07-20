import { FC } from "react";

import { SvgIcon } from "./types";

export const AlertIcon: FC<SvgIcon> = ({
  width = 15,
  height = 14,
  fill = "#FB751C",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 3.75C7.32761 3.75 7.16228 3.81848 7.04038 3.94038C6.91848 4.06228 6.85 4.22761 6.85 4.4V7C6.85 7.17239 6.91848 7.33772 7.04038 7.45962C7.16228 7.58152 7.32761 7.65 7.5 7.65C7.67239 7.65 7.83772 7.58152 7.95962 7.45962C8.08152 7.33772 8.15 7.17239 8.15 7V4.4C8.15 4.22761 8.08152 4.06228 7.95962 3.94038C7.83772 3.81848 7.67239 3.75 7.5 3.75ZM8.098 9.353C8.08377 9.31158 8.0641 9.27223 8.0395 9.236L7.9615 9.1385C7.8701 9.04831 7.75402 8.98721 7.62793 8.96291C7.50184 8.93862 7.37137 8.95222 7.253 9.002C7.17423 9.03491 7.10168 9.08108 7.0385 9.1385C6.97826 9.19923 6.9306 9.27127 6.89825 9.35046C6.8659 9.42965 6.84951 9.51445 6.85 9.6C6.85103 9.68494 6.8687 9.76885 6.902 9.847C6.93119 9.92766 6.97777 10.0009 7.03843 10.0616C7.09908 10.1222 7.17234 10.1688 7.253 10.198C7.33081 10.2324 7.41494 10.2501 7.5 10.2501C7.58507 10.2501 7.6692 10.2324 7.747 10.198C7.82766 10.1688 7.90092 10.1222 7.96158 10.0616C8.02223 10.0009 8.06881 9.92766 8.098 9.847C8.13131 9.76885 8.14897 9.68494 8.15 9.6C8.15319 9.55672 8.15319 9.51327 8.15 9.47C8.13881 9.42855 8.12127 9.38908 8.098 9.353ZM7.5 0.5C6.21442 0.5 4.95772 0.881218 3.8888 1.59545C2.81988 2.30968 1.98676 3.32484 1.49479 4.51256C1.00282 5.70028 0.874095 7.00721 1.1249 8.26809C1.3757 9.52896 1.99477 10.6872 2.90381 11.5962C3.81285 12.5052 4.97104 13.1243 6.23191 13.3751C7.49279 13.6259 8.79972 13.4972 9.98744 13.0052C11.1752 12.5132 12.1903 11.6801 12.9046 10.6112C13.6188 9.54228 14 8.28558 14 7C14 6.14641 13.8319 5.30117 13.5052 4.51256C13.1786 3.72394 12.6998 3.00739 12.0962 2.40381C11.4926 1.80022 10.7761 1.32144 9.98744 0.994783C9.19883 0.668127 8.35359 0.5 7.5 0.5ZM7.5 12.2C6.47154 12.2 5.46617 11.895 4.61104 11.3236C3.7559 10.7523 3.0894 9.94013 2.69583 8.98995C2.30225 8.03978 2.19928 6.99423 2.39992 5.98553C2.60056 4.97683 3.09581 4.05028 3.82305 3.32304C4.55028 2.59581 5.47683 2.10056 6.48553 1.89992C7.49423 1.69927 8.53978 1.80225 9.48995 2.19583C10.4401 2.5894 11.2523 3.2559 11.8236 4.11103C12.395 4.96617 12.7 5.97154 12.7 7C12.7 8.37912 12.1521 9.70176 11.177 10.677C10.2018 11.6521 8.87913 12.2 7.5 12.2Z"
      fill={fill}
      stroke={fill}
      strokeWidth="0.18"
    />
  </svg>
);

export default AlertIcon;