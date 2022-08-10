import { FC } from "react";

import { SvgIcon } from "./types";

export const CheIconFooter: FC<SvgIcon> = ({
  width = 27,
  height = 23,
  fill = "#636AFF",
  stroke = "#FFF400",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 0.997803C6.05038 0.997803 0 5.37695 0 10.7857C0 13.0405 1.04942 15.1258 2.82438 16.781L0.0906906 22.9978L6.49088 19.14C8.53791 20.0393 10.9347 20.5606 13.5 20.5606C20.9496 20.5606 27 16.1814 27 10.7727C27 5.37695 20.9496 0.997803 13.5 0.997803Z"
        fill={fill}
      />
      <path
        d="M17.0364 14.8437C16.2784 16.2863 14.7885 17.2747 13.0764 17.2747C11.3644 17.2747 9.87445 16.2863 9.11643 14.8437H7.27366C8.13624 17.2614 10.4103 18.9978 13.0634 18.9978C15.7164 18.9978 18.0035 17.2614 18.8531 14.8437H17.0364Z"
        fill={stroke}
      />
      <path
        d="M7.11684 10.8366C6.67249 11.5178 5.99288 11.9319 5.27407 11.9319C4.76437 11.9319 4.32001 11.7315 4.03249 11.3575C3.70576 10.9568 3.58813 10.4092 3.70576 9.84817C3.9018 8.72617 4.97348 7.79117 6.03209 7.79117C6.72476 7.79117 7.27367 8.2186 7.48278 8.89981L9.15565 8.43231C8.85506 7.08325 7.77031 6.21503 6.35882 6.21503C4.37229 6.21503 2.45111 7.87131 2.0721 9.88824C1.87606 10.8767 2.08517 11.7983 2.63408 12.4929C3.16992 13.1607 3.98021 13.5214 4.90813 13.5214C6.33269 13.5214 7.77031 12.6532 8.5806 11.3041L7.11684 10.8366Z"
        fill={stroke}
      />
      <path
        d="M16.5398 7.02987C16.1215 6.50894 15.4289 6.21508 14.6316 6.21508C13.6907 6.21508 12.9718 6.62915 12.5406 6.9898L12.3184 7.16344L12.9326 3.9978H11.1944L9.40393 13.4012H11.1552L11.8479 9.728C12.057 8.64608 12.9196 7.85801 13.8867 7.85801C14.2918 7.85801 14.6316 8.0183 14.8538 8.2988C15.1021 8.60601 15.1936 9.04679 15.1021 9.52765L14.3572 13.4146H16.0954L16.9449 8.98001C17.0887 8.19194 16.9449 7.52408 16.5398 7.02987Z"
        fill={stroke}
      />
      <path
        d="M24.9956 9.10022C24.9825 7.41723 23.754 6.20173 22.0812 6.20173C20.0946 6.20173 18.1734 7.85801 17.7944 9.87493C17.5984 10.8634 17.8075 11.785 18.3564 12.4796C18.8923 13.1474 19.7025 13.5081 20.6305 13.5081C21.7675 13.5081 23.3489 12.9204 24.1984 11.785L22.7869 11.3442C22.2772 11.7182 21.5976 11.9453 20.9703 11.9453C20.0293 11.9453 19.4281 11.4377 19.3627 10.5962L19.3497 10.4894H24.7473C24.9303 10.0486 25.0217 9.55436 24.9956 9.10022ZM19.5849 9.20708L19.6633 9.04679C19.977 8.44572 20.6958 7.75115 21.7283 7.75115C22.7215 7.75115 23.2443 8.41901 23.3097 9.08686L23.3227 9.20708H19.5849Z"
        fill={stroke}
      />
    </svg>
  );
};