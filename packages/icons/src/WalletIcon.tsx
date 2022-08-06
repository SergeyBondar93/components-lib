import { FC } from "react";

import { SvgIcon } from "./types";

export const WalletIcon: FC<SvgIcon> = ({
  height = 19,
  width = 19,
  fill = "#636AFF",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.733 7.21875H1.76745C1.00779 7.21875 0.969837 7.59692 1.01109 8.05896L1.69204 15.6596C1.73329 16.1218 1.84038 16.5 2.59888 16.5H15.9014C16.6749 16.5 16.7666 16.1218 16.8079 15.6598L17.4888 8.05912C17.5302 7.59692 17.4925 7.21875 16.733 7.21875ZM16.1837 5.3625C16.0921 4.99125 15.6433 4.6875 15.1859 4.6875H9.56404C9.10682 4.6875 8.46761 4.41953 8.14388 4.09215L7.65235 3.59552C7.32845 3.26798 6.6894 3 6.23219 3H3.54615C3.08893 3 2.67346 3.37732 2.62314 3.83869L2.38207 6.0375H16.35L16.1837 5.3625Z"
      fill={fill}
    />
  </svg>
);
