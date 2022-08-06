import { FC } from "react";

import { SvgIcon } from "./types";

export const CherehapaLogoIcon: FC<SvgIcon> = ({
  width = 106,
  height = 32,
  fill = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 106 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6045 0C8.78629 0 0 6.36967 0 14.237C0 17.5166 1.52396 20.5498 4.10153 22.9573L0.1317 32L9.42598 26.3886C12.3986 27.6967 15.8793 28.455 19.6045 28.455C30.4228 28.455 39.2091 22.0853 39.2091 14.218C39.2091 6.36966 30.4228 0 19.6045 0ZM45.7753 10.8436C46.5843 10.4076 47.5439 10.3128 48.3905 10.6161L48.9173 7.86732C46.923 7.58296 45.7377 8.60666 45.2109 9.25121L44.9287 9.57348L45.2485 7.90523H42.6898L40.7707 17.8958H43.3295L44.3266 12.7583C44.4959 11.9621 45.0039 11.2607 45.7753 10.8436ZM54.5992 7.75358C57.0075 7.75358 58.7572 9.47869 58.776 11.8484C58.8137 12.4929 58.7008 13.1943 58.4186 13.8768H50.7611L50.7799 13.9905C50.874 15.1469 51.7207 15.8484 53.0377 15.8484C53.9407 15.8484 54.9003 15.5261 55.6152 14.9953L57.6848 15.6209C56.4807 17.2322 54.2041 18.0853 52.5485 18.0853C51.1939 18.0853 50.0462 17.5545 49.2748 16.6256C48.4846 15.6588 48.2024 14.3507 48.4658 12.9479C49.0114 10.0853 51.7583 7.75358 54.5992 7.75358ZM51.129 11.9242H56.3678L56.349 11.8104C56.2361 10.9005 55.5211 9.97158 54.1289 9.97158C52.6802 9.97158 51.6454 10.9384 51.2127 11.7725L51.129 11.9242ZM69.2744 8.90997C68.6724 8.17063 67.6752 7.75358 66.5275 7.75358C65.1729 7.75358 64.1569 8.34125 63.5361 8.8531L63.3103 9.04267L64.1569 4.66353H61.5982L59.0394 17.9337H61.5982L62.5953 12.7394C62.8964 11.2417 64.1005 10.1422 65.4551 10.1422C66.0195 10.1422 66.4899 10.3507 66.8097 10.7299C67.1484 11.1469 67.2801 11.7536 67.1484 12.4171L66.076 17.9147H68.6347L69.8389 11.6588C70.0458 10.5782 69.8577 9.63035 69.2744 8.90997ZM79.5282 8.90997L79.7164 7.92419V7.90523H82.2563L80.3373 17.8958H77.7785L77.9855 16.91L77.7597 17.0806C76.8754 17.7441 75.8783 18.0664 74.8247 18.0664C73.6017 18.0664 72.5105 17.5735 71.7767 16.6635C70.9865 15.6777 70.6855 14.3318 70.9489 12.9289C71.4945 10.0664 74.1473 7.73462 76.8754 7.73462C77.929 7.73462 78.7757 8.07585 79.3777 8.73936L79.5282 8.90997ZM75.5772 15.7725C77.1012 15.7725 78.644 14.4834 78.945 12.9479C79.0767 12.1896 78.9074 11.4313 78.4558 10.8815C78.0231 10.3318 77.3834 10.0474 76.6497 10.0474C75.0881 10.0474 73.6017 11.3176 73.3195 12.891C73.169 13.6683 73.3383 14.4266 73.771 14.9574C74.185 15.4882 74.8247 15.7725 75.5772 15.7725ZM85.3607 17.0616C85.9816 17.7251 86.8282 18.0664 87.863 18.0664C90.5911 18.0664 93.2439 15.7536 93.8083 12.891C94.0717 11.4882 93.7519 10.1232 92.9617 9.15642C92.2279 8.26542 91.1367 7.77253 89.9138 7.77253C88.8602 7.77253 87.863 8.09481 86.9787 8.75831L86.753 8.92893L86.9599 7.94315H84.4012L81.6919 21.9905H84.2318L85.2102 16.9289L85.3607 17.0616ZM85.8122 12.891C86.0945 11.3555 87.6184 10.0664 89.1612 10.0664C89.8949 10.0664 90.5534 10.3507 90.9674 10.8626C91.4189 11.3934 91.5882 12.1517 91.4377 12.9289C91.1367 14.5024 89.6315 15.7725 88.0888 15.7725C87.355 15.7725 86.7153 15.4692 86.2826 14.9384C85.831 14.4076 85.6617 13.6493 85.8122 12.891ZM103.291 8.90997L103.479 7.92419V7.90523H106L104.081 17.8958H101.541L101.748 16.91L101.522 17.0806C100.638 17.7441 99.6408 18.0664 98.5872 18.0664C97.3642 18.0664 96.273 17.5735 95.5392 16.6635C94.749 15.6777 94.448 14.3318 94.7114 12.9289C95.257 10.0664 97.9098 7.73462 100.638 7.73462C101.692 7.73462 102.538 8.07585 103.14 8.73936L103.291 8.90997ZM99.3397 15.7725C100.864 15.7725 102.406 14.4834 102.707 12.9479C102.839 12.1896 102.67 11.4313 102.218 10.8815C101.786 10.3318 101.146 10.0474 100.412 10.0474C98.8506 10.0474 97.3642 11.3176 97.082 12.891C96.9315 13.6683 97.1008 14.4266 97.5336 14.9574C97.9475 15.4882 98.5872 15.7725 99.3397 15.7725ZM24.064 8.89109C23.462 8.15175 22.4648 7.73469 21.3171 7.73469C19.9625 7.73469 18.9277 8.32236 18.3068 8.83421L17.987 9.08066L18.8713 4.58777H16.369L13.7914 17.9337H16.3125L17.3097 12.7205C17.6107 11.1849 18.8524 10.0664 20.2447 10.0664C20.828 10.0664 21.3171 10.2939 21.637 10.692C21.9944 11.1281 22.1261 11.7536 21.9944 12.4361L20.922 17.9527H23.4243L24.6473 11.6589C24.8542 10.5404 24.6473 9.59251 24.064 8.89109ZM7.84611 15.8484C8.8809 15.8484 9.85925 15.2607 10.4989 14.2939L12.6061 14.9574C11.4397 16.8721 9.37008 18.1043 7.31931 18.1043C5.98349 18.1043 4.81701 17.5924 4.04562 16.6446C3.25542 15.6588 2.95439 14.3507 3.2366 12.9479C3.78222 10.0853 6.54793 7.73461 9.40771 7.73461C11.4397 7.73461 13.0012 8.96684 13.434 10.8815L11.0257 11.545C10.7247 10.5782 9.93451 9.97158 8.93735 9.97158C7.41339 9.97158 5.87061 11.2986 5.58839 12.891C5.41906 13.6872 5.58839 14.4645 6.05875 15.0332C6.47267 15.564 7.11236 15.8484 7.84611 15.8484ZM19.0783 23.4313C21.5429 23.4313 23.6878 22.0285 24.779 19.9811H27.3942C26.1713 23.4124 22.8788 25.8768 19.0594 25.8768C15.2401 25.8768 11.9664 23.4124 10.7247 19.9811H13.3775C14.4687 22.0285 16.6136 23.4313 19.0783 23.4313ZM32.0413 7.71573C34.4496 7.71573 36.2181 9.44085 36.2369 11.8295C36.2745 12.474 36.1428 13.1754 35.8794 13.801H28.1091L28.1279 13.9527C28.222 15.147 29.0875 15.8674 30.4421 15.8674C31.3452 15.8674 32.3235 15.5451 33.0573 15.0143L35.0892 15.6399C33.8663 17.2513 31.5898 18.0854 29.9529 18.0854C28.6171 18.0854 27.4506 17.5735 26.6792 16.6257C25.889 15.6399 25.588 14.3318 25.8702 12.929C26.4158 10.0664 29.1815 7.71573 32.0413 7.71573ZM28.5607 11.7536L28.4478 11.9811H33.8287L33.8099 11.8105C33.7158 10.8627 32.9632 9.91478 31.5333 9.91478C30.047 9.91478 29.0122 10.9006 28.5607 11.7536Z"
      fill={fill}
    />
  </svg>
);
