import { forwardRef } from "react";

import { BaseInput } from "./BaseInput";
import { useBaseStyles } from "./styles/styles";
import { IInputProps } from "./types";

export const Input = forwardRef(
  (props: IInputProps, ref: React.MutableRefObject<HTMLInputElement>) => {
    const classes = useBaseStyles();

    return <BaseInput classes={classes} ref={ref} {...props} />;
  }
);
