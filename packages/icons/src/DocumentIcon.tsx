import { FC } from "react";

import { SvgIcon } from "./types";

export const DocumentIcon: FC<SvgIcon> = ({
  width = 13,
  height = 16,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.56195 13.0023C3.40062 13.0023 3.26702 12.9531 3.16114 12.8546C3.05526 12.7513 3.00233 12.6282 3.00233 12.4855C3.00233 12.3329 3.05526 12.2074 3.16114 12.1089C3.26702 12.0055 3.40062 11.9539 3.56195 11.9539H9.46073C9.61198 11.9539 9.74055 12.0055 9.84642 12.1089C9.9523 12.2074 10.0052 12.3329 10.0052 12.4855C10.0052 12.6282 9.9523 12.7513 9.84642 12.8546C9.74055 12.9531 9.61198 13.0023 9.46073 13.0023H3.56195ZM3.56195 10.2335C3.40062 10.2335 3.26702 10.1843 3.16114 10.0858C3.05526 9.98739 3.00233 9.86187 3.00233 9.70928C3.00233 9.56161 3.05526 9.43855 3.16114 9.3401C3.26702 9.23673 3.40062 9.18505 3.56195 9.18505H9.46073C9.61198 9.18505 9.74055 9.23673 9.84642 9.3401C9.9523 9.43855 10.0052 9.56161 10.0052 9.70928C10.0052 9.86187 9.9523 9.98739 9.84642 10.0858C9.74055 10.1843 9.61198 10.2335 9.46073 10.2335H3.56195ZM2.47295 16H10.5271C11.3388 16 11.9538 15.7933 12.3723 15.3798C12.7908 14.9712 13 14.3683 13 13.5708V6.97001H7.32054C6.38782 6.97001 5.92147 6.51223 5.92147 5.59668V0H2.47295C1.6562 0 1.03859 0.206737 0.620128 0.620212C0.206709 1.03369 0 1.63667 0 2.42916V13.5708C0 14.3683 0.206709 14.9712 0.620128 15.3798C1.03859 15.7933 1.6562 16 2.47295 16ZM7.47179 5.87725H12.9168C12.8966 5.71481 12.8261 5.54992 12.7051 5.38256C12.5841 5.2152 12.4252 5.03307 12.2286 4.83618L8.09948 0.738348C7.90789 0.5513 7.72387 0.398708 7.54741 0.280572C7.37599 0.162437 7.20458 0.0935241 7.03316 0.0738348V5.46378C7.03316 5.73942 7.17937 5.87725 7.47179 5.87725Z"
        fill="white"
      />
    </svg>
  );
};
