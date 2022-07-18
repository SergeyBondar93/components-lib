import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const CheckIcon: FC<SvgIcon> = memo(
  ({ width = 10, height = 10, fill = "#000000", ...props }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 10 10"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.9606 10C4.40643 10 4.74857 9.83042 4.98186 9.46389L9.76672 1.89825C9.93261 1.64114 10 1.37856 10 1.1488C10 0.492341 9.5127 0 8.87506 0C8.43961 0 8.16485 0.164114 7.90047 0.601751L3.94505 7.13348L1.97512 4.69365C1.74184 4.40919 1.47745 4.2779 1.11457 4.2779C0.471747 4.2779 0 4.77024 0 5.43217C0 5.73304 0.0777605 5.97374 0.32141 6.26915L2.986 9.53501C3.25039 9.85777 3.56143 10 3.9606 10Z"
        fill={fill}
      />
    </svg>
  )
);
