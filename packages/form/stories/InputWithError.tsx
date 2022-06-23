import { Input, IInputProps } from "@cheaaa/input";
import { forwardRef } from "react";

interface IInputWithErrorProps extends IInputProps {
  error?: string;
  innerRef?: any;
}

const errorStyles = {
  position: "absolute",
  bottom: "0px",
  color: "red",
} as const;

export const InputWithError = forwardRef<
  HTMLInputElement,
  IInputWithErrorProps
>(({ error, innerRef, ...props }: IInputWithErrorProps, ref) => {
  return (
    <>
      <Input {...props} ref={ref} />
      {error && <span style={errorStyles}>{error}</span>}
    </>
  );
});
