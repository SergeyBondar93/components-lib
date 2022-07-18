import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const PlaneIcon: FC<SvgIcon> = memo(
  ({ width = 25, height = 27, fill = "white", ...props }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 25 27"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.956 17.201C22.7499 17.0234 14.5271 11.0594 14.5271 11.0594C14.5156 11.0479 14.5042 11.0365 14.4984 11.0307C14.1835 10.7099 14.2007 10.4349 14.1778 9.95365C14.1778 9.95365 14.1262 6.00052 14.0518 4.68281C13.9774 3.3651 13.2902 2.5 12.4885 2.5C11.6869 2.5 11.0055 3.35938 10.931 4.67708C10.8566 5.99479 10.805 9.94792 10.805 9.94792C10.7821 10.4292 10.7993 10.7042 10.4844 11.025C10.4729 11.0365 10.4615 11.0479 10.4558 11.0536C10.4558 11.0536 2.23868 17.0177 2.02681 17.1953C1.81494 17.3729 1.5 17.6422 1.5 18.238C1.5 18.937 1.70614 19.0229 2.10698 18.9026C2.10698 18.9026 10.1351 16.6396 10.4328 16.5651C10.7306 16.4906 10.8852 16.5995 10.9081 16.9948C10.931 17.3901 10.9539 19.6531 10.9597 19.9167C10.9654 20.1802 10.9253 20.1859 10.7936 20.3406L8.96122 22.6781C8.86387 22.7927 8.80661 22.9359 8.80661 23.0964C8.80661 23.0964 8.80661 23.4458 8.80661 23.8068C8.80661 24.1677 8.96694 24.225 9.27616 24.0875C9.58537 23.95 11.1429 23.0906 11.1429 23.0906C11.183 23.0734 11.4063 22.9818 11.5094 22.9818C11.7499 22.9818 11.9675 22.976 12.0133 23.337C12.0877 23.9901 12.2939 24.5 12.5 24.5C12.7061 24.5 12.9123 23.9901 12.9867 23.337C13.0268 22.976 13.2501 22.9818 13.4906 22.9818C13.5937 22.9818 13.817 23.0734 13.8571 23.0906C13.8571 23.0906 15.4146 23.95 15.7238 24.0875C16.0331 24.225 16.1934 24.1677 16.1934 23.8068C16.1934 23.4458 16.1934 23.0964 16.1934 23.0964C16.1934 22.9359 16.1361 22.787 16.0388 22.6781L14.2064 20.3406C14.0747 20.1859 14.0403 20.1745 14.0403 19.9167C14.0403 19.6589 14.069 17.3901 14.0919 16.9948C14.1148 16.5995 14.2694 16.4906 14.5672 16.5651C14.8649 16.6396 22.893 18.9026 22.893 18.9026C23.2996 19.0229 23.5 18.937 23.5 18.238C23.4828 17.6479 23.1679 17.3786 22.956 17.201Z"
        fill={fill}
      />
    </svg>
  )
);
