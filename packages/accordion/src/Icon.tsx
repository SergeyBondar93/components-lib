import { SVGAttributes } from "react";

export const Icon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.23469 5.69432C5.58844 5.32351 5.58844 4.67649 5.23469 4.30568L1.83382 0.740742C1.31909 0.201182 0.5 0.627562 0.5 1.43506L0.5 8.56494C0.5 9.37244 1.31909 9.79882 1.83382 9.25926L5.23469 5.69432Z"
        fill="#718299"
        fillOpacity="0.45"
      />
    </svg>
  );
};
