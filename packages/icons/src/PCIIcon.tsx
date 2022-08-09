import { FC } from "react";

import { SvgIcon } from "./types";

export const PCIIcon: FC<SvgIcon> = ({ width = 65, height = 25 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.391 14.1963L45.0364 14.3923C44.9929 14.5739 44.9248 14.7258 44.8322 14.8478C44.7396 14.9704 44.6237 15.0629 44.4845 15.1252C44.3468 15.1865 44.1713 15.2172 43.9581 15.2172C43.6988 15.2172 43.4868 15.18 43.3221 15.1055C43.159 15.0289 43.0175 14.8954 42.8977 14.705C42.7787 14.5146 42.7192 14.2705 42.7192 13.9728C42.7192 13.5767 42.8238 13.2724 43.0329 13.0601C43.2436 12.8467 43.5404 12.74 43.9234 12.74C44.2235 12.74 44.4593 12.8013 44.6309 12.9239C44.8034 13.0464 44.9314 13.2336 45.0149 13.4853L44.3646 13.6297C44.3426 13.5564 44.3188 13.5033 44.2933 13.4705C44.2525 13.4136 44.2024 13.3704 44.143 13.3408C44.0834 13.3102 44.0167 13.2949 43.9429 13.2949C43.7762 13.2949 43.6483 13.3622 43.5592 13.4968C43.492 13.5975 43.4584 13.7551 43.4584 13.9696C43.4584 14.2355 43.4987 14.4177 43.5793 14.5162C43.6601 14.6147 43.7732 14.664 43.9185 14.664C44.0596 14.664 44.1658 14.6246 44.2371 14.5458C44.3101 14.467 44.3628 14.3521 44.3953 14.201L44.391 14.1963ZM45.2998 13.9789C45.2998 13.5882 45.4082 13.284 45.625 13.0662C45.8415 12.8484 46.1432 12.7395 46.5301 12.7395C46.9268 12.7395 47.2327 12.8468 47.4476 13.0613C47.6626 13.2747 47.7701 13.5743 47.7701 13.9602C47.7701 14.2401 47.7229 14.4698 47.6286 14.649C47.536 14.8274 47.401 14.9669 47.2234 15.0676C47.0469 15.1668 46.8269 15.2164 46.5633 15.2164C46.2953 15.2164 46.0731 15.1737 45.8967 15.0883C45.7224 15.0029 45.5802 14.8668 45.4702 14.6799C45.3613 14.4938 45.3068 14.2607 45.3068 13.9806L45.2998 13.9789ZM46.0359 13.9822C46.0359 14.2238 46.0803 14.3975 46.1692 14.5032C46.2585 14.6089 46.38 14.6617 46.5336 14.6617C46.6915 14.6617 46.8141 14.6096 46.9012 14.5054C46.9873 14.4012 47.0303 14.2155 47.0303 13.9484C47.0303 13.7229 46.9845 13.5586 46.893 13.4554C46.8026 13.3503 46.6801 13.2978 46.5254 13.2978C46.3762 13.2978 46.2569 13.3503 46.1676 13.4554C46.0772 13.5594 46.032 13.7339 46.032 13.9791L46.0359 13.9822ZM48.1604 12.7802H49.129L49.5032 14.237L49.8752 12.7802H50.8409V15.1743H50.2396V13.3489L49.7739 15.1743H49.2298L48.7658 13.3489V15.1743H48.1613V12.7804L48.1604 12.7802ZM51.3054 12.7802H52.5297C52.7962 12.7802 52.9955 12.8439 53.1277 12.9713C53.2611 13.0986 53.3278 13.2796 53.3278 13.5143C53.3278 13.7559 53.2552 13.9445 53.1098 14.0802C52.9656 14.2159 52.7452 14.2838 52.4484 14.2838H52.0452V15.1725H51.3055V12.7776L51.3054 12.7802ZM52.0452 13.8008H52.2256C52.3675 13.8008 52.4672 13.7763 52.5246 13.7274C52.5821 13.6774 52.6109 13.6138 52.6109 13.5365C52.6109 13.4613 52.5859 13.3976 52.536 13.3454C52.4862 13.2929 52.3926 13.2666 52.255 13.2666H52.0445V13.8001L52.0452 13.8008ZM53.7146 12.7802H54.4498V14.585H55.5984V15.1743H53.7129V12.7804L53.7146 12.7802ZM55.9661 12.7802H56.703V15.1743H55.9644V12.7804L55.9661 12.7802ZM58.6963 14.7792H57.8565L57.7405 15.1745H56.9872L57.8826 12.781H58.6849L59.5802 15.1761H58.8107L58.693 14.7822L58.6963 14.7792ZM58.5411 14.2616L58.2764 13.4011L58.0133 14.2616H58.5378H58.5411ZM59.8221 12.7802H60.5099L61.4069 14.1047V12.7802H62.1014V15.1743H61.4069L60.5148 13.8597V15.1747H59.8221V12.78V12.7802ZM62.4249 12.7802H64.6633V13.3715H63.9117V15.1743H63.1765V13.3718H62.4249V12.7805V12.7802Z"
        fill="#225E63"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.5252 16.4353L37.6579 15.7599L36.9674 14.2144C36.4537 14.8497 35.9479 15.6738 35.5247 16.4338L35.5252 16.4353ZM34.7986 9.35999L30.6165 -0.00109863L0 1.74557L8.48189 24.9989L24.8094 19.8282C23.7735 18.3284 23.3912 16.5455 24.5905 15.6741C25.9352 14.699 27.9563 15.8268 29.2553 17.4306C30.5019 15.3261 33.9985 10.4686 34.7991 9.36048L34.7986 9.35999Z"
        fill="#225E63"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.6661 6.76329C30.9476 6.76329 31.9866 5.77882 31.9866 4.56436C31.9866 3.3499 30.9465 2.36609 29.6655 2.36609C28.3835 2.36609 27.3449 3.35056 27.3449 4.56518C27.3449 5.77997 28.3835 6.76428 29.6657 6.76428L29.6661 6.76329ZM27.7676 7.71706H31.5647V17.6787H27.7676V7.71739V7.71706ZM25.8927 10.6243C25.9188 10.6403 25.9417 10.6271 25.9417 10.5958V8.07231C25.9417 8.04013 25.9188 8.00172 25.891 7.98662C25.891 7.98662 25.3927 7.66043 23.8732 7.56965C23.7915 7.5245 22.468 7.51777 22.102 7.56965C16.5794 8.01452 16.3752 12.0286 16.3752 12.2121V13.1864C16.3752 13.3054 16.3752 17.4096 22.102 17.773C22.6608 17.8154 23.7572 17.773 23.8732 17.773C25.1917 17.773 26.1051 17.3736 26.1051 17.3736C26.1328 17.3608 26.1574 17.326 26.1574 17.2942V14.9319C26.1574 14.8997 26.1361 14.8883 26.1083 14.9048C26.1083 14.9048 25.6982 15.2364 23.896 15.4121C23.3846 15.4695 23.1428 15.4433 22.9582 15.4121C20.4028 14.9803 20.2802 13.0991 20.2802 13.0991C20.277 13.0679 20.2737 13.017 20.2737 12.9858V12.2684C20.2737 12.2372 20.277 12.1863 20.2802 12.1551C20.2802 12.1551 20.4518 10.1393 22.9565 9.92584H23.8928C24.9989 10.0752 25.8861 10.6252 25.8861 10.6252L25.8927 10.6243ZM5.84326 17.6389C5.84326 17.6708 5.86826 17.6964 5.89996 17.6964H9.59878C9.63015 17.6964 9.65564 17.6708 9.65564 17.6401V14.7487C9.65564 14.7182 9.68096 14.6939 9.71282 14.695C9.71282 14.695 15.6172 15.124 15.6172 11.1416C15.6172 7.99926 11.9127 7.65485 10.6932 7.7123C10.6687 7.71395 5.90061 7.7123 5.90061 7.7123C5.86957 7.7123 5.84343 7.73939 5.84343 7.77009V17.6394L5.84326 17.6389ZM9.59028 12.4859V9.88136H10.4951C10.4951 9.88136 11.8121 9.94111 11.915 10.8409C11.9395 10.9115 11.933 11.3514 11.915 11.376C11.7467 12.4345 10.603 12.4864 10.603 12.4864L9.59322 12.4848L9.59028 12.4859Z"
        fill="#FEFEFE"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.7703 22.4882C30.0791 22.4882 30.3152 22.4882 30.7053 22.3142C32.0538 21.602 36.5918 10.467 41.3783 7.04198C41.4061 7.01998 41.4458 6.98814 41.4686 6.95547C41.4994 6.91032 41.5005 6.8642 41.5005 6.8642C41.5005 6.8642 41.5005 6.63601 40.7907 6.63601C36.5295 6.51946 32.0984 15.4941 29.7701 19.0449C29.7407 19.0843 29.5806 19.0449 29.5806 19.0449C29.5806 19.0449 28.0202 17.1948 26.6641 16.4856C26.6363 16.4709 26.4811 16.4233 26.3209 16.4348C26.2147 16.4348 25.584 16.5612 25.2899 16.8747C24.9436 17.2424 24.9501 17.4493 24.9534 17.8974C24.955 17.9335 24.9779 18.0829 25.0204 18.1584C25.352 18.7412 26.8667 20.8326 28.1068 21.9867C28.2996 22.1246 28.5921 22.4906 29.7717 22.4906L29.7703 22.4882Z"
        fill="#2BBC5D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.6367 3.66587H46.1823C46.8816 3.66587 47.4454 3.76108 47.8737 3.95151C48.3058 4.14215 48.6623 4.41575 48.9432 4.77231C49.2243 5.12799 49.428 5.54238 49.5543 6.0155C49.6807 6.48828 49.7438 6.98897 49.7438 7.51756C49.7438 8.34603 49.6491 8.99008 49.4595 9.44973C49.2735 9.90501 49.0136 10.288 48.6799 10.5989C48.3462 10.9053 47.988 11.1094 47.6051 11.2112C47.0817 11.3513 46.6075 11.4213 46.1824 11.4213H42.6369V3.66324L42.6367 3.66587ZM45.0235 5.4232V9.66347H45.6071C46.106 9.66347 46.4608 9.60875 46.6715 9.49931C46.8821 9.38659 47.0469 9.19288 47.1659 8.91818C47.2848 8.63911 47.3443 8.18931 47.3443 7.56878C47.3443 6.74689 47.2105 6.18436 46.9429 5.88121C46.676 5.57806 46.2333 5.42649 45.6148 5.42649H45.0196L45.0235 5.4232ZM50.393 8.85908L52.6625 8.71626C52.7115 9.08727 52.8112 9.36962 52.9615 9.56333C53.2066 9.87743 53.5579 10.0345 54.0153 10.0345C54.3563 10.0345 54.6177 9.95513 54.7996 9.79644C54.9848 9.63447 55.0774 9.44733 55.0774 9.23501C55.0774 9.03474 54.9891 8.85525 54.8127 8.69657C54.6362 8.53788 54.2288 8.38849 53.5905 8.24841C52.5437 8.01202 51.7971 7.69792 51.3505 7.30613C50.9006 6.91542 50.6757 6.41638 50.6757 5.80898C50.6757 5.41062 50.79 5.03524 51.0188 4.68284C51.2497 4.32716 51.5955 4.04863 52.0563 3.84726C52.5203 3.64261 53.1543 3.54028 53.9582 3.54028C54.9439 3.54028 55.695 3.72578 56.2113 4.09679C56.7298 4.46451 57.0386 5.05056 57.1377 5.85495L54.8878 5.98792C54.8279 5.6388 54.701 5.3849 54.5072 5.22621C54.3165 5.06752 54.0529 4.98818 53.7163 4.98818C53.4386 4.98818 53.2294 5.04837 53.0889 5.16876C52.9473 5.28586 52.8765 5.42868 52.8765 5.59721C52.8765 5.72088 52.9342 5.83196 53.0497 5.93046C53.1619 6.03333 53.4288 6.12909 53.8503 6.21774C54.8938 6.44428 55.6402 6.67411 56.0894 6.90722C56.5426 7.13704 56.871 7.42323 57.0747 7.76578C57.2827 8.10832 57.3867 8.49136 57.3867 8.9149C57.3867 9.41285 57.2495 9.87195 56.975 10.2922C56.7005 10.7125 56.3176 11.0319 55.8264 11.2504C55.3362 11.4638 54.7172 11.5705 53.9694 11.5705C52.6558 11.5705 51.7459 11.3166 51.2397 10.8088C50.7332 10.301 50.4467 9.65532 50.3803 8.87172L50.393 8.85908ZM58.0053 8.85908L60.2748 8.71626C60.3238 9.08727 60.4235 9.36962 60.5738 9.56333C60.8189 9.87743 61.1702 10.0345 61.6277 10.0345C61.9686 10.0345 62.23 9.95513 62.4119 9.79644C62.5982 9.63447 62.6913 9.44733 62.6913 9.23501C62.6913 9.03474 62.6031 8.85525 62.4267 8.69657C62.2502 8.53788 61.8428 8.38849 61.2045 8.24841C60.1577 8.01202 59.411 7.69792 58.9644 7.30613C58.5146 6.91542 58.2896 6.41638 58.2896 5.80898C58.2896 5.41062 58.4035 5.03524 58.6311 4.68284C58.8631 4.32716 59.209 4.04863 59.6686 3.84726C60.1316 3.64261 60.7655 3.54028 61.5705 3.54028C62.5563 3.54028 63.3073 3.72578 63.8236 4.09679C64.3432 4.46451 64.652 5.05056 64.7501 5.85495L62.5018 5.98628C62.4408 5.63716 62.3139 5.38326 62.1211 5.22457C61.9316 5.06588 61.668 4.98654 61.3303 4.98654C61.0525 4.98654 60.8434 5.04673 60.7029 5.16711C60.5613 5.28422 60.4905 5.42758 60.4905 5.59721C60.4905 5.72088 60.5482 5.83196 60.6637 5.93046C60.7759 6.03333 61.0427 6.12909 61.4643 6.21774C62.5078 6.44319 63.2545 6.67247 63.7044 6.90557C64.1564 7.1354 64.4848 7.42159 64.6896 7.76413C64.8966 8.10668 65 8.48972 65 8.91326C65 9.41121 64.8633 9.87031 64.5899 10.2906C64.3154 10.7108 63.932 11.0304 63.4397 11.2493C62.9495 11.4638 62.3308 11.571 61.5836 11.571C60.2699 11.571 59.3598 11.3166 58.8533 10.8077C58.3479 10.2999 58.0614 9.65417 57.9939 8.87058L58.0053 8.85908Z"
        fill="#225E63"
      />
    </svg>
  );
};
