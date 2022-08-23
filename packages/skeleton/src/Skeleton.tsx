import { getClassName, IThemedProps, Margin, PxSize } from "@cheaaa/theme";
import { CSSProperties, memo, useMemo } from "react";

import { ComponentNames, useStyles } from "./styles";

export interface ISkeletonProps extends IThemedProps {
  /**
   * Должна быть передана либо ширина либо shouldFitContent
   */
  width?: PxSize;
  height: PxSize;
  margin?: number | Margin;
  borderRadius?: CSSProperties["borderRadius"];
  animated?: boolean;
  /**
   * Делает 100% ширину
   */
  shouldFitContent?: boolean;
}

export const Skeleton = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    width: widthProps,
    height,
    borderRadius = 8,
    animated = true,
    margin,
    shouldFitContent,
  }: ISkeletonProps) => {
    const classes = useStyles();
    const width = shouldFitContent ? "100%" : widthProps;

    const classNames = useMemo(() => {
      const wrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "wrapper"
      );

      return {
        wrapperClassName,
      };
    }, [classes, baseAppearance, appearance]);

    return (
      <span
        className={classNames.wrapperClassName}
        data-shouldfitcontent={String(!!shouldFitContent)}
        /**
         * Следует ли давать анимацию
         */
        data-animated={String(!!animated)}
        style={{
          width,
          height,
          borderRadius,
          margin,
          backgroundSize: `${"150%"} ${height}`,
          backgroundPosition: `-${"150%"} 0, 0 0`,
        }}
      />
    );
  }
);
