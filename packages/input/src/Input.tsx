import { forwardRef } from "react";

import { BaseInput } from "./BaseInput";
import { useBaseStyles } from "./styles/styles";

export const Input = forwardRef(
  (props: any, ref: React.MutableRefObject<HTMLInputElement>) => {
    const classes = useBaseStyles();

    return <BaseInput classes={classes} ref={ref} {...props} />;
  }
);
