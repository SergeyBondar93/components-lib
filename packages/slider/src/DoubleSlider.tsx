import { FC, memo, useEffect, useMemo, useRef, useState } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";
import { useDoubleSlider } from "./doubleSliderHook";

interface TagProps extends IThemedProps {
  name?: string;

  from?: number;
  to: number;

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

  onChange?: any;
}

const isDiff = (a: any, b: any) => {
  if (a === -1) return false;

  return a !== b;
};

export const DoubleSlider: FC<TagProps> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    precision = 0,
    name,
    from,
    to,
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

    const isDoubleRef = useRef(typeof from === "number");

    const sliderOneRef = useRef<HTMLDivElement>(null);
    const sliderTwoRef = useRef<HTMLDivElement>(null);
    const sliderOneRefPointer = useRef<HTMLDivElement>(null);
    const sliderTwoRefPointer = useRef<HTMLDivElement>(null);
    /**
     * value - число 0...1
     */
    const { isSliding: isSlidingOne, value: valueUseSliderOne } =
      useDoubleSlider(sliderOneRef, sliderOneRefPointer);
    const { isSliding: isSlidingTwo, value: valueUseSliderTwo } =
      useDoubleSlider(sliderTwoRef, sliderTwoRefPointer);

    const minValueNumber = useMemo(() => Number(minValue), [minValue]);
    const maxValueNumber = useMemo(() => Number(maxValue), [maxValue]);

    const formattedValueProps = useMemo(() => {
      if (isDoubleRef.current) {
        return {
          from: Number(from),
          to: Number(to),
        } as const;
      } else {
        return {
          from: minValueNumber,
          to: Number(to),
        } as const;
      }
    }, [from, to, minValueNumber]);

    const [wasSliding, setWasSliding] = useState(false);

    useEffect(() => {
      if ((isSlidingOne || isSlidingTwo) && !wasSliding) {
        setWasSliding(true);
      }
    }, [isSlidingOne, isSlidingTwo, wasSliding]);

    const computedValueToCallback = useMemo(() => {
      const wasRestrictionsChanged =
        isDiff(prevRestrictionsRef.current.min, minValueNumber) ||
        isDiff(prevRestrictionsRef.current.max, maxValueNumber);

      if (wasSliding && !wasRestrictionsChanged) {
        const newValue1 =
          minValueNumber +
          (maxValueNumber - minValueNumber) * valueUseSliderOne;
        const newValue2 =
          minValueNumber +
          (maxValueNumber - minValueNumber) * valueUseSliderTwo;

        prevRestrictionsRef.current.min = minValueNumber;
        prevRestrictionsRef.current.max = maxValueNumber;

        return {
          from: Number(newValue1.toFixed(precision)),
          to: Number(newValue2.toFixed(precision)),
        };
      } else {
        prevRestrictionsRef.current.min = minValueNumber;
        prevRestrictionsRef.current.max = maxValueNumber;

        return {
          from: Number(
            formattedValueProps.from < minValueNumber
              ? 0
              : formattedValueProps.from.toFixed(precision)
          ),
          to: Number(
            formattedValueProps.to > maxValueNumber
              ? maxValueNumber
              : formattedValueProps.to.toFixed(precision)
          ),
        };
      }
    }, [
      wasSliding,
      formattedValueProps,
      valueUseSliderOne,
      valueUseSliderTwo,
      minValueNumber,
      maxValueNumber,
      precision,
    ]);

    useEffect(() => {
      if (wasSliding) {
        if (isDoubleRef.current) {
          onChange(computedValueToCallback, {
            isSlidingOne,
            isSlidingTwo,
            name,
          });
        } else {
          onChange(computedValueToCallback.to, {
            isSliding: isSlidingTwo,
            name,
          });
        }
      }
    }, [
      wasSliding,
      computedValueToCallback,
      isSlidingOne,
      isSlidingTwo,
      onChange,
      name,
    ]);

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
    }, [formattedValueProps, minValueNumber, maxValueNumber, precision]);

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
