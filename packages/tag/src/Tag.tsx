import { getClassName, IThemedProps } from "@cheaaa/theme";
import { FC, memo, ReactNode, useCallback, useMemo } from "react";

import { ComponentNames, useStyles } from "./styles";

interface TagProps extends IThemedProps {
  onClick?: (name?: string) => void;
  name?: string;
  appearance?: string;
  prefix?: JSX.Element;
  postfix?: JSX.Element;
  children: ReactNode;
}

export const Tag: FC<TagProps> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    children,
    onClick,
    name,
    prefix,
    postfix,
  }) => {
    const classes = useStyles();
    const isClickable = !!onClick;

    const handleClick = useCallback(() => {
      if (isClickable) onClick(name);
    }, [isClickable, name]);

    const classNames = useMemo(() => {
      const wrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "wrapper"
      );
      const prefixClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "prefix"
      );
      const postfixClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "postfix"
      );

      return {
        wrapperClassName,
        prefixClassName,
        postfixClassName,
      };
    }, [classes, baseAppearance, appearance]);

    return (
      <div
        className={classNames.wrapperClassName}
        style={{
          cursor: isClickable ? "pointer" : "default",
        }}
        onClick={handleClick}
      >
        {prefix && <span className={classNames.prefixClassName}>{prefix}</span>}
        {children}
        {postfix && (
          <span className={classNames.postfixClassName}>{postfix}</span>
        )}
      </div>
    );
  }
);
