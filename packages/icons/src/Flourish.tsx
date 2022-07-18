import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const Flourish: FC<SvgIcon> = memo(
  ({
    height = "19",
    width = "281",
    fill = "#636AFF",
    stroke = "#636AFF",
    strokeWidth = "0.6",
    ...props
  }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 281 19"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M93.4943 2.50169C62.7277 2.14943 31.8355 3.4368 2.05582 8.84248C1.5245 8.93856 1.30393 9.12751 1.26046 9.17074C1.00607 9.42693 0.978648 9.69913 1.01085 9.9233C1.03017 10.0594 1.16064 10.6342 1.8739 10.6935C2.36658 10.7335 5.86357 10.4533 7.2128 10.3812C13.5645 10.0434 19.9034 9.56143 26.239 9.00421C40.6039 7.74566 54.9495 6.65684 69.337 5.66569C77.4147 5.10847 85.4956 4.6473 93.5716 4.26942C113 4.49519 132.381 5.37587 151.399 6.28536C143.839 6.74811 136.894 7.21726 131.134 7.52149C121.422 8.03387 111.728 8.63912 102.036 9.43653C97.0558 9.84484 92.0823 10.2884 87.112 10.812C86.5614 10.8712 85.3072 10.9321 84.7002 11.0041C84.4426 11.0329 84.2558 11.0794 84.1721 11.1114C83.6472 11.3132 83.5812 11.7263 83.5748 11.9344C83.5716 12.0609 83.615 12.751 84.5006 12.8855C125.675 19.1975 168.631 11.8544 209.953 17.9902C210.438 18.0623 210.892 17.7292 210.964 17.2456C211.037 16.7637 210.702 16.3121 210.216 16.2401C171.297 10.4613 130.928 16.6404 91.96 12.1041C95.3653 11.7759 98.7721 11.4797 102.182 11.1995C111.857 10.4037 121.534 9.80001 131.229 9.28763C140.986 8.77364 154.176 7.76967 167.982 7.13719C179.831 7.79369 191.673 8.53024 203.523 9.15471C208.522 9.41731 213.523 9.63508 218.52 9.90248C220.575 10.0114 225.861 10.4677 226.627 10.298C227.223 10.1651 227.366 9.74077 227.401 9.52781C227.438 9.29723 227.416 9.01061 227.145 8.7368C227.062 8.65033 226.811 8.471 226.295 8.32369C212.36 4.35429 189.543 4.41673 168.172 5.37586C163.575 5.11967 158.979 4.87628 154.38 4.65692C143.854 4.15254 133.211 3.64655 122.508 3.24784C152.672 2.50648 182.851 2.71945 213.038 3.25586C225.712 3.48163 259.876 4.84266 273.332 6.04517C273.167 6.2133 276.132 6.45028 276.144 6.70487C276.166 7.19164 277.009 7.52242 277.5 7.5C280.276 7.3719 279.347 7.16813 279.983 7C280.379 6.89592 279.641 6.81375 279.741 6.70487C279.986 6.44227 280.031 6.16045 279.983 5.89305C279.952 5.72652 279.877 5.54399 279.703 5.37586C279.587 5.26057 279.303 5.08445 278.82 4.96436C273.531 3.65617 228.161 1.75552 213.07 1.48651C173.191 0.778778 133.327 0.634683 93.4943 2.50169ZM215.508 7.97462C207.715 6.92263 198.58 6.55275 189.05 6.57677C193.904 6.85698 198.76 7.1308 203.618 7.38699C207.58 7.59675 211.544 7.77607 215.508 7.97462ZM56.7399 4.78662C46.516 5.53599 36.3034 6.3462 26.0827 7.24288C24.9026 7.34535 23.724 7.44623 22.5438 7.54551C33.8465 6.16847 45.2666 5.29261 56.7399 4.78662Z"
        fill={fill}
        fillRule="evenodd"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
);
