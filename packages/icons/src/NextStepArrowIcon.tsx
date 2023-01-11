import { FC } from "react";

import { SvgIcon } from "./types";

export const NextStepArrowIcon: FC<SvgIcon> = ({
  width = 52,
  height = 16,
  fill = "#FFF",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.93221 2.10548C15.2562 13.7939 34.0383 10.9169 49.2244 2.67752C49.4855 2.53644 49.8206 2.6095 49.9712 2.84178C50.1218 3.07407 50.0331 3.37788 49.772 3.51896C34.1611 11.9899 14.8577 14.8348 1.16065 2.81863C0.946838 2.63183 0.946412 2.32004 1.1596 2.12221C1.37169 1.92515 1.71757 1.91771 1.93221 2.10548Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2133 3.2531C48.2531 3.2822 47.0482 3.33073 46.9114 3.33264C43.2036 3.38456 39.6986 2.91512 36.16 1.96596C35.8726 1.88924 35.7141 1.61433 35.8057 1.35347C35.8974 1.0926 36.2059 0.943422 36.4933 1.02014C39.9243 1.94156 43.3234 2.39765 46.9201 2.3469C47.1297 2.34407 49.8383 2.23347 50.3869 2.24817C50.612 2.25324 50.736 2.31923 50.7635 2.33734C50.914 2.4284 50.9682 2.54445 50.9902 2.64099C51.014 2.75018 51.0045 2.94007 50.8464 3.14304C50.6801 3.35489 50.2195 3.71842 50.1113 3.81848C48.4825 5.33228 46.5216 6.89679 45.0288 8.66702C43.605 10.3551 42.6058 12.2326 42.8229 14.4527C42.8496 14.7229 42.6262 14.9667 42.3257 14.9969C42.0253 15.0271 41.7599 14.8312 41.7332 14.5609C41.4911 12.0787 42.5725 9.96861 44.1634 8.08209C45.6477 6.32247 47.5799 4.75928 49.2133 3.2531Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.93221 2.10548C15.2562 13.7939 34.0383 10.9169 49.2244 2.67752C49.4855 2.53644 49.8206 2.6095 49.9712 2.84178C50.1218 3.07407 50.0331 3.37788 49.772 3.51896C34.1611 11.9899 14.8577 14.8348 1.16065 2.81863C0.946838 2.63183 0.946412 2.32004 1.1596 2.12221C1.37169 1.92515 1.71757 1.91771 1.93221 2.10548Z"
        stroke={fill}
        strokeWidth="0.3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2133 3.2531C48.2531 3.2822 47.0482 3.33073 46.9114 3.33264C43.2036 3.38456 39.6986 2.91512 36.16 1.96596C35.8726 1.88924 35.7141 1.61433 35.8057 1.35347C35.8974 1.0926 36.2059 0.943422 36.4933 1.02014C39.9243 1.94156 43.3234 2.39765 46.9201 2.3469C47.1297 2.34407 49.8383 2.23347 50.3869 2.24817C50.612 2.25324 50.736 2.31923 50.7635 2.33734C50.914 2.4284 50.9682 2.54445 50.9902 2.64099C51.014 2.75018 51.0045 2.94007 50.8464 3.14304C50.6801 3.35489 50.2195 3.71842 50.1113 3.81848C48.4825 5.33228 46.5216 6.89679 45.0288 8.66702C43.605 10.3551 42.6058 12.2326 42.8229 14.4527C42.8496 14.7229 42.6262 14.9667 42.3257 14.9969C42.0253 15.0271 41.7599 14.8312 41.7332 14.5609C41.4911 12.0787 42.5725 9.96861 44.1634 8.08209C45.6477 6.32247 47.5799 4.75928 49.2133 3.2531Z"
        stroke={fill}
        strokeWidth="0.3"
      />
    </svg>
  );
};