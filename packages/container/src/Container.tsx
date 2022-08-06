import { getClassName, IThemedProps } from "@cheaaa/theme";
import { FC, memo, ReactNode, useMemo } from "react";

import { ComponentNames, useStyles } from "./styles";

interface IContainerProps extends IThemedProps {
  children: ReactNode;
}

export const Container: FC<IContainerProps> = memo(
  ({ baseAppearance = "base", appearance = "base", children }) => {
    const classes = useStyles();

    const className = useMemo(() => {
      const wrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "wrapper"
      );

      return wrapperClassName;
    }, [classes, baseAppearance, appearance]);

    return <div className={className}>{children}</div>;
  }
);
