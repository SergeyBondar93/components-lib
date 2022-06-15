import { FC } from "react";

export const Button: FC<any> = ({ children }) => {
  return (
    <div>
      <button type="submit">{children} lol kek</button>
    </div>
  );
};
