import { FC, memo, useEffect, useMemo, useRef } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";
import { useDoubleSlider } from "./doubleSliderHook";

export type DoubleSliderCallbackValue = {
  from: number;
  to: number;
};
export type onChangeDoubleSliderFn = (
  rawValue: DoubleSliderCallbackValue,
  value: DoubleSliderCallbackValue,
  params: {
    isSlidingOne: boolean;
    isSlidingTwo: boolean;
    name?: string;
  }
) => void;

interface TagProps extends IThemedProps {
  name?: string;

  from: number;
  to: number;

  difference?: number;

  /**
   * Минимально доступное значение
   */
  minValue: number;
  /**
   * Максимально доступное значение
   */
  maxValue: number;

  /**
   * Кличество знаков после запятой в value
   */
  precision?: number;

  onChange: onChangeDoubleSliderFn;
}

export const DoubleSlider: FC<TagProps> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    name,
    from,
    to,
    difference = 0,
    minValue,
    maxValue,
    onChange,
  }) => {
    const prevRestrictionsRef = useRef({ min: -1, max: -1 });
    const classes = useStyles();
    const classNames = useMemo(() => {
      const wrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "wrapper"
      );

      const filledLineClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "filledLine"
      );

      const lineClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "line"
      );

      const pointWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "pointWrapper"
      );

      const pointClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "point"
      );

      return {
        wrapperClassName,
        filledLineClassName,
        lineClassName,
        pointWrapperClassName,
        pointClassName,
      };
    }, [classes, baseAppearance, appearance]);

    const formattedDifference = useMemo(() => {
      return difference / (maxValue - minValue);
    }, [difference, minValue, maxValue]);

    const getMax = () => {
      return valueUseSliderTwo - formattedDifference;
    };
    const getMin = () => {
      return valueUseSliderOne + formattedDifference;
    };

    const sliderOneRef = useRef<HTMLDivElement>(null);
    const sliderTwoRef = useRef<HTMLDivElement>(null);
    const sliderOneRefPointer = useRef<HTMLDivElement>(null);
    const sliderTwoRefPointer = useRef<HTMLDivElement>(null);
    /**
     * value - число 0...1
     */
    const { isSliding: isSlidingOne, value: valueUseSliderOne } =
      useDoubleSlider(
        sliderOneRef,
        sliderOneRefPointer,
        Number(from) / maxValue,
        { getMax }
      );
    const { isSliding: isSlidingTwo, value: valueUseSliderTwo } =
      useDoubleSlider(
        sliderTwoRef,
        sliderTwoRefPointer,
        Number(to) / maxValue,
        { getMin }
      );

    const minValueNumber = useMemo(() => Number(minValue), [minValue]);
    const maxValueNumber = useMemo(() => Number(maxValue), [maxValue]);

    const formattedValueProps = useMemo(() => {
      return {
        from: Number(from),
        to: Number(to),
      } as const;
    }, [from, to, minValueNumber]);

    const rawValue = useMemo(() => {
      const newValue1 =
        minValueNumber + (maxValueNumber - minValueNumber) * valueUseSliderOne;
      const newValue2 =
        minValueNumber + (maxValueNumber - minValueNumber) * valueUseSliderTwo;

      prevRestrictionsRef.current.min = minValueNumber;
      prevRestrictionsRef.current.max = maxValueNumber;

      // debugger
      return {
        from: Math.floor(Number(newValue1)),
        to: Math.floor(Number(newValue2)),
      };
    }, [
      formattedValueProps,
      valueUseSliderOne,
      valueUseSliderTwo,
      minValueNumber,
      maxValueNumber,
    ]);

    const prevValueRef = useRef({ from, to });

    const value = useMemo(() => {
      if (isSlidingOne || isSlidingTwo) {
        return {
          from: prevValueRef.current.from,
          to: prevValueRef.current.to,
        };
      } else {
        prevValueRef.current.from = rawValue.from;
        prevValueRef.current.to = rawValue.to;

        return rawValue;
      }
    }, [rawValue, isSlidingOne, isSlidingTwo]);

    useEffect(() => {
      onChange(rawValue, value, {
        isSlidingOne,
        isSlidingTwo,
        name,
      });
    }, [rawValue, isSlidingOne, isSlidingTwo, onChange, name]);

    const linesStyles = useMemo(() => {
      const range = maxValueNumber - minValueNumber;

      const result = {
        from:
          formattedValueProps.from < minValueNumber
            ? 0
            : (formattedValueProps.from - minValueNumber) / range,
        to:
          formattedValueProps.to > maxValueNumber
            ? 1
            : (formattedValueProps.to - minValueNumber) / range,
      };

      return {
        start: `${result.from * 100}%`,
        end: `${result.to * 100}%`,
      };
    }, [formattedValueProps, minValueNumber, maxValueNumber]);

    return (
      <div
        style={{
          position: "relative",
          height: "20px",
          width: "400px",
        }}
      >
        <span
          className={classNames.filledLineClassName}
          style={{
            left: linesStyles.start,
            right: `calc(100% - ${linesStyles.end})`,
          }}
        />

        <span className={classNames.lineClassName} />

        <div ref={sliderOneRef} className={classNames.wrapperClassName}>
          <span
            className={classNames.pointWrapperClassName}
            style={{
              left: linesStyles.start,
            }}
            ref={sliderOneRefPointer}
          >
            <span
              className={classNames.pointClassName}
              data-is-sliding={isSlidingOne}
            />
          </span>
        </div>

        <div ref={sliderTwoRef} className={classNames.wrapperClassName}>
          <span
            className={classNames.pointWrapperClassName}
            style={{
              left: linesStyles.end,
            }}
            ref={sliderTwoRefPointer}
          >
            <span
              className={classNames.pointClassName}
              data-is-sliding={isSlidingTwo}
            />
          </span>
        </div>
      </div>
    );
  }
);
