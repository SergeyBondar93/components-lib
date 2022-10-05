import { forwardRef } from "react";

import { Input, IInputProps } from "@cheaaa/input";

interface IInputWithErrorProps extends IInputProps {
  error?: string;
}

const errorStyles = {
  position: "absolute",
  bottom: "0px",
  color: "red",
} as const;

export const InputWithError = forwardRef<
  HTMLInputElement,
  IInputWithErrorProps
>(({ error, ...props }: IInputWithErrorProps, ref) => {
  return (
    <>
      <Input {...props} ref={ref} />
      {error && <span style={errorStyles}>{error}</span>}
    </>
  );
});
