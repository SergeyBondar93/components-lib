import { FC, memo } from "react";

import { SvgIcon } from "./types";

export const CircleQuestionMarkIcon: FC<SvgIcon> = memo(
  ({
    height = 52,
    width = 52,
    fill = "#718299",
    fillOpacity = 0.2,
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 0C20.8577 0 15.8309 1.52487 11.5552 4.38179C7.27951 7.2387 3.94702 11.2993 1.97914 16.0502C0.0112655 20.8011 -0.503621 26.0288 0.499594 31.0723C1.50281 36.1158 3.97907 40.7486 7.61523 44.3848C11.2514 48.0209 15.8842 50.4972 20.9277 51.5004C25.9712 52.5036 31.1989 51.9887 35.9498 50.0209C40.7007 48.053 44.7613 44.7205 47.6182 40.4448C50.4751 36.1691 52 31.1423 52 26C52 22.5856 51.3275 19.2047 50.0209 16.0502C48.7142 12.8958 46.7991 10.0295 44.3848 7.61522C41.9705 5.2009 39.1042 3.28575 35.9498 1.97913C32.7953 0.67251 29.4144 0 26 0ZM26 46.8C21.8862 46.8 17.8647 45.5801 14.4441 43.2946C11.0236 41.009 8.35762 37.7605 6.78332 33.9598C5.20901 30.1591 4.79711 25.9769 5.59968 21.9421C6.40225 17.9073 8.38326 14.2011 11.2922 11.2922C14.2011 8.38324 17.9073 6.40224 21.9421 5.59966C25.9769 4.79709 30.1591 5.209 33.9598 6.7833C37.7605 8.35761 41.009 11.0236 43.2946 14.4441C45.5801 17.8647 46.8 21.8861 46.8 26C46.8 31.5165 44.6086 36.8071 40.7078 40.7078C36.8071 44.6086 31.5165 46.8 26 46.8Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <path
        d="M25.4909 33.2703C24.4462 33.2703 23.0533 33.9459 23.0533 35.6351C23.0533 36.3108 23.4015 36.9865 23.7497 37.3243C24.098 37.6622 24.7944 38 25.4909 38C25.5025 38 25.5141 37.9999 25.5258 37.9997C26.7662 37.9798 27.9284 36.8757 27.9284 35.6351C27.9284 34.9595 27.5802 34.2838 27.232 33.9459C26.8838 33.6081 26.1873 33.2703 25.4909 33.2703ZM33.5 20.4324C33.5 18.7432 32.8036 17.0541 32.1071 16.0405C30.7142 14.0135 28.2766 13 25.8391 13C21.8445 13 18.9344 15.6306 18.5446 19.2669C18.454 20.1118 19.1816 20.7703 20.0314 20.7703C20.9311 20.7703 21.6318 20.0047 22.0321 19.199C22.6683 17.918 24.0703 16.9614 25.8391 16.7162C28.3771 16.7162 30.4474 19.3865 29.4964 21.7396C29.444 21.8693 29.3856 21.9969 29.3213 22.1216C28.9731 22.7973 27.9284 23.473 26.8838 24.4865C26.8035 24.5449 26.7256 24.6021 26.6499 24.6584C24.9746 25.9025 23.7497 27.8052 23.7497 29.8919C23.7497 30.4516 24.2035 30.9054 24.7633 30.9054H26.2081C26.5812 30.9054 26.8838 30.6029 26.8838 30.2297C26.8838 29.2162 26.8838 28.8784 27.5802 28.2027C28.9724 26.852 30.54 25.6729 31.8144 24.2106C31.9472 24.0582 32.0503 23.921 32.1071 23.8108C32.8036 22.7973 33.5 21.7838 33.5 20.4324Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </svg>
  )
);
