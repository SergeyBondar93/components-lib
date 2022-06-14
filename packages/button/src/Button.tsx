import { FC } from "react";

export const Button: FC<any> = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};
