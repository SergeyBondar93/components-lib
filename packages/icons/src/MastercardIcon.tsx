import { FC } from "react";

import { SvgIcon } from "./types";

export const MastercardIcon: FC<SvgIcon> = ({ width = 37, height = 29 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.73169 28.4371V26.5787C6.73169 25.8664 6.28707 25.4018 5.52485 25.4018C5.14374 25.4018 4.73088 25.5257 4.44505 25.9283C4.22273 25.5876 3.90514 25.4018 3.42875 25.4018C3.11116 25.4018 2.79357 25.4947 2.5395 25.8354V25.4637H1.87256V28.4371H2.5395V26.7955C2.5395 26.269 2.82533 26.0212 3.26996 26.0212C3.71458 26.0212 3.9369 26.3 3.9369 26.7955V28.4371H4.60384V26.7955C4.60384 26.269 4.92143 26.0212 5.3343 26.0212C5.77892 26.0212 6.00124 26.3 6.00124 26.7955V28.4371H6.73169ZM16.6088 25.4637H15.529V24.5655H14.862V25.4637H14.2586V26.0522H14.862V27.415C14.862 28.0964 15.1478 28.4991 15.9101 28.4991C16.1959 28.4991 16.5135 28.4061 16.7358 28.2822L16.5452 27.7247C16.3547 27.8486 16.1324 27.8796 15.9736 27.8796C15.656 27.8796 15.529 27.6938 15.529 27.384V26.0522H16.6088V25.4637ZM22.2619 25.4018C21.8808 25.4018 21.6267 25.5876 21.4679 25.8354V25.4637H20.801V28.4371H21.4679V26.7646C21.4679 26.269 21.6902 25.9903 22.1031 25.9903C22.2301 25.9903 22.3889 26.0212 22.516 26.0522L22.7065 25.4327C22.5795 25.4018 22.3889 25.4018 22.2619 25.4018ZM13.7187 25.7115C13.4011 25.4947 12.9565 25.4018 12.4801 25.4018C11.7179 25.4018 11.2097 25.7734 11.2097 26.3619C11.2097 26.8575 11.5908 27.1363 12.2578 27.2292L12.5754 27.2601C12.9247 27.3221 13.1153 27.415 13.1153 27.5699C13.1153 27.7867 12.8612 27.9415 12.4166 27.9415C11.9719 27.9415 11.6226 27.7867 11.4003 27.6318L11.0827 28.1274C11.432 28.3752 11.9084 28.4991 12.3848 28.4991C13.2741 28.4991 13.7822 28.0964 13.7822 27.5389C13.7822 27.0124 13.3693 26.7336 12.7342 26.6407L12.4166 26.6097C12.1307 26.5787 11.9084 26.5168 11.9084 26.3309C11.9084 26.1141 12.1307 25.9903 12.4801 25.9903C12.8612 25.9903 13.2423 26.1451 13.4329 26.238L13.7187 25.7115ZM31.4403 25.4018C31.0592 25.4018 30.8051 25.5876 30.6463 25.8354V25.4637H29.9793V28.4371H30.6463V26.7646C30.6463 26.269 30.8686 25.9903 31.2815 25.9903C31.4085 25.9903 31.5673 26.0212 31.6943 26.0522L31.8849 25.4327C31.7579 25.4018 31.5673 25.4018 31.4403 25.4018ZM22.9288 26.9504C22.9288 27.8486 23.564 28.4991 24.5485 28.4991C24.9932 28.4991 25.3108 28.4061 25.6283 28.1584L25.3108 27.6318C25.0567 27.8177 24.8026 27.9106 24.5168 27.9106C23.9769 27.9106 23.5958 27.5389 23.5958 26.9504C23.5958 26.3929 23.9769 26.0212 24.5168 25.9903C24.8026 25.9903 25.0567 26.0832 25.3108 26.269L25.6283 25.7425C25.3108 25.4947 24.9932 25.4018 24.5485 25.4018C23.564 25.4018 22.9288 26.0522 22.9288 26.9504ZM29.0901 26.9504V25.4637H28.4231V25.8354C28.2008 25.5566 27.8832 25.4018 27.4704 25.4018C26.6129 25.4018 25.9459 26.0522 25.9459 26.9504C25.9459 27.8486 26.6129 28.4991 27.4704 28.4991C27.915 28.4991 28.2326 28.3442 28.4231 28.0654V28.4371H29.0901V26.9504ZM26.6446 26.9504C26.6446 26.4239 26.994 25.9903 27.5657 25.9903C28.1056 25.9903 28.4867 26.3929 28.4867 26.9504C28.4867 27.4769 28.1056 27.9106 27.5657 27.9106C26.994 27.8796 26.6446 27.4769 26.6446 26.9504ZM18.6731 25.4018C17.7839 25.4018 17.1487 26.0212 17.1487 26.9504C17.1487 27.8796 17.7839 28.4991 18.7049 28.4991C19.1495 28.4991 19.5941 28.3752 19.9435 28.0964L19.6259 27.6318C19.3718 27.8177 19.0542 27.9415 18.7366 27.9415C18.3238 27.9415 17.9109 27.7557 17.8156 27.2292H20.0705C20.0705 27.1363 20.0705 27.0743 20.0705 26.9814C20.1023 26.0212 19.5306 25.4018 18.6731 25.4018ZM18.6731 25.9593C19.086 25.9593 19.3718 26.2071 19.4353 26.6717H17.8474C17.9109 26.269 18.1967 25.9593 18.6731 25.9593ZM35.2196 26.9504V24.2867H34.5526V25.8354C34.3303 25.5566 34.0127 25.4018 33.5999 25.4018C32.7424 25.4018 32.0754 26.0522 32.0754 26.9504C32.0754 27.8486 32.7424 28.4991 33.5999 28.4991C34.0445 28.4991 34.3621 28.3442 34.5526 28.0654V28.4371H35.2196V26.9504ZM32.7741 26.9504C32.7741 26.4239 33.1235 25.9903 33.6951 25.9903C34.2351 25.9903 34.6162 26.3929 34.6162 26.9504C34.6162 27.4769 34.2351 27.9106 33.6951 27.9106C33.1235 27.8796 32.7741 27.4769 32.7741 26.9504ZM10.4793 26.9504V25.4637H9.81233V25.8354C9.59001 25.5566 9.27242 25.4018 8.85956 25.4018C8.00206 25.4018 7.33511 26.0522 7.33511 26.9504C7.33511 27.8486 8.00206 28.4991 8.85956 28.4991C9.30418 28.4991 9.62177 28.3442 9.81233 28.0654V28.4371H10.4793V26.9504ZM8.00206 26.9504C8.00206 26.4239 8.3514 25.9903 8.92307 25.9903C9.46297 25.9903 9.84409 26.3929 9.84409 26.9504C9.84409 27.4769 9.46297 27.9106 8.92307 27.9106C8.3514 27.8796 8.00206 27.4769 8.00206 26.9504Z"
        fill="#101820"
      />
      <path
        d="M23.5019 2.88489H13.4978V20.4156H23.5019V2.88489Z"
        fill="#FF5F00"
      />
      <path
        d="M14.1328 11.6495C14.1328 8.08764 15.8478 4.9284 18.4838 2.88419C16.5465 1.39749 14.101 0.499268 11.4333 0.499268C5.11321 0.499268 0 5.48591 0 11.6495C0 17.8131 5.11321 22.7998 11.4333 22.7998C14.101 22.7998 16.5465 21.9016 18.4838 20.4149C15.8478 18.4016 14.1328 15.2114 14.1328 11.6495Z"
        fill="#EB001B"
      />
      <path
        d="M37.0001 11.649C37.0001 17.8126 31.8869 22.7993 25.5669 22.7993C22.8991 22.7993 20.4537 21.9011 18.5164 20.4144C21.1841 18.3702 22.8674 15.2109 22.8674 11.649C22.8674 8.08715 21.1524 4.92791 18.5164 2.8837C20.4537 1.397 22.8991 0.498779 25.5669 0.498779C31.8869 0.498779 37.0001 5.51639 37.0001 11.649Z"
        fill="#F79E1B"
      />
    </svg>
  );
};
