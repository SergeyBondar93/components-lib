import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const Foots: FC<SvgIcon> = memo(
  ({ height = "79", width = "116", ...props }) => (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 116 79"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M42.4961 55.9763C40.4017 55.8352 38.6959 53.6587 39.1039 51.6479C39.3875 50.2497 40.1557 49.5595 41.434 49.5538C43.5071 49.5449 45.333 51.9642 44.8612 54.0954C44.6028 55.2627 43.611 56.0516 42.4961 55.9763ZM50.2409 51.7864C48.2811 52.2399 46.2118 51.2318 45.0915 49.2776C44.1861 47.6985 44.1252 46.1653 44.9168 44.885C46.4422 42.4181 50.1254 43.0089 51.8664 45.9997C52.5534 47.18 52.7204 48.2359 52.4115 49.4448C52.0788 50.746 51.3528 51.529 50.2409 51.7864ZM35.7903 57.3146C35.221 57.3942 34.0241 56.9153 33.6168 56.4449C32.9429 55.6667 32.4986 54.5199 32.5506 53.6934C32.61 52.7529 32.8765 52.2065 33.5105 51.7251C34.5162 50.9615 36.2592 51.5904 37.0893 53.0165C38.1027 54.7574 37.3978 57.0901 35.7903 57.3146ZM28.496 55.9386C27.8256 55.7922 27.6591 55.6759 27.2181 55.0456C26.9392 54.647 26.6555 54.0541 26.5876 53.7281C26.4155 52.9022 26.7201 51.798 27.283 51.207C28.6587 49.7627 31.0455 51.2333 31.0273 53.514C31.0139 55.1876 29.9082 56.2467 28.496 55.9386ZM38.4907 48.9117C38.4008 48.9321 37.9064 49.0834 37.3919 49.2479C35.1858 49.9533 31.6737 50.0554 29.1352 49.4879C25.6823 48.716 23.2635 47.0713 21.2644 44.136C20.4781 42.9816 20.3898 42.7391 16.6459 31.4343C14.5467 25.0955 12.591 19.1408 12.3001 18.2014C10.4639 12.2722 11.5038 7.78037 15.203 5.66206C17.958 4.08443 21.0662 4.0652 23.334 5.61159C26.0758 7.48129 28.2976 11.5391 29.8725 17.5534C31.023 21.9466 33.4125 25.3695 38.5921 30.0441C41.4446 32.6185 42.3422 33.6341 43.4579 35.5497C45.6185 39.2596 45.3173 42.5815 42.5233 45.8579C41.5629 46.9841 39.2433 48.7405 38.4907 48.9117ZM23.1549 53.0396C22.4212 52.8291 21.7456 52.0233 21.5613 51.1386C21.3833 50.2848 21.8424 49.0243 22.4601 48.6706C23.1655 48.2667 23.6032 48.3003 24.3129 48.8131C26.2056 50.1803 25.257 53.6428 23.1549 53.0396Z"
        fill="#E0E6F3"
        fillRule="evenodd"
      />
      <path
        d="M97.1829 71.5942C97.8156 72.7073 98.7824 73.4052 99.8109 73.4911C100.416 73.5416 100.627 73.4758 101.303 73.0274C102.046 72.5344 102.102 72.4494 102.301 71.5331C102.642 69.9517 101.97 68.3718 100.57 67.47C97.9242 65.7646 95.5277 68.6824 97.1829 71.5942Z"
        fill="#E0E6F3"
      />
      <path
        d="M90.9386 77.1617C91.6362 77.4716 92.3727 77.5299 93.245 77.3437C94.3182 77.1148 95.2329 75.9906 95.5466 74.515C95.8175 73.2401 95.6029 72.0964 94.854 70.8247C92.9214 67.5426 88.7767 67.8578 88.0304 71.3437C87.518 73.7378 88.7414 76.1854 90.9386 77.1617Z"
        fill="#E0E6F3"
      />
      <path
        d="M101.69 63.9808C101.304 65.9084 103.101 67.9518 105.15 67.916C105.736 67.9058 106.354 67.4706 106.657 66.8543C107.445 65.2501 106.418 63.132 104.531 62.4696C103.08 61.9604 101.977 62.5471 101.69 63.9808Z"
        fill="#E0E6F3"
      />
      <path
        d="M104.511 60.0219C105.07 60.9828 106.324 61.703 107.325 61.6382C108.563 61.5583 109.322 60.7083 109.205 59.5316C109.047 57.9349 107.663 56.7047 106.114 56.7831C105.276 56.8259 104.936 57.0055 104.495 57.6403C104.114 58.1881 104.122 59.3538 104.511 60.0219Z"
        fill="#E0E6F3"
      />
      <path
        d="M86.7661 65.9913C88.971 67.5261 92.2475 67.8535 95.241 66.8381C98.8751 65.6053 102.196 61.7315 103.491 57.2142C104.483 53.7555 104.132 50.7644 102.373 47.6832C101.564 46.266 100.981 45.5682 93.4433 36.9779C89.0082 31.9237 84.8803 27.2926 84.2701 26.6865C80.6689 23.1094 76.9713 21.6548 73.8698 22.5949C71.3173 23.3686 68.6824 26.0559 68.1996 28.3778C67.9689 29.487 68.1072 31.4028 68.5049 32.6053C69.4458 35.4519 71.7009 38.6393 75.1795 42.0398C78.2923 45.0826 80.0007 48.7392 81.5078 55.5847C82.3605 59.458 82.8091 60.7938 83.8833 62.6598C84.8253 64.2961 85.574 65.1615 86.7661 65.9913Z"
        fill="#E0E6F3"
      />
      <path
        d="M105.787 51.4889C104.247 52.3705 105.086 54.7957 107.117 55.3377C107.824 55.5261 108.03 55.5074 108.554 55.2076C109.051 54.9229 109.194 54.7398 109.32 54.2287C109.757 52.4558 107.353 50.592 105.787 51.4889Z"
        fill="#E0E6F3"
      />
    </svg>
  )
);
