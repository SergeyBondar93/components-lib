import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import { useSlider } from "react-use";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";

interface TagProps extends IThemedProps {
  name?: string;
  value: number | [number, number];

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

const isDouble = <T extends number | [number, number]>(
  v: T
): T extends [number, number] ? true : false => {
  // @ts-ignore
  if (Array.isArray(v)) return true;

  // @ts-ignore
  return false;
};

export const Slider: FC<TagProps> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    precision = 0,
    name,
    value: valueProps,
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

    const isDoubleRef = useRef(isDouble(valueProps));

    const sliderOneRef = useRef<HTMLDivElement>(null);
    const sliderTwoRef = useRef<HTMLDivElement>(null);
    const sliderOnePointRef = useRef<HTMLSpanElement>(null);
    const sliderTwoPointRef = useRef<HTMLSpanElement>(null);
    /**
     * value - число 0...1
     */
    const { isSliding: isSlidingOne, value: valueUseSliderOne } =
      useSlider(sliderOneRef);
    const { isSliding: isSlidingTwo, value: valueUseSliderTwo } =
      useSlider(sliderTwoRef);

    const minValueNumber = useMemo(() => Number(minValue), [minValue]);
    const maxValueNumber = useMemo(() => Number(maxValue), [maxValue]);

    const valuePropsNumber = useMemo(() => {
      if (isDoubleRef.current) {
        return (valueProps as [number, number]).map((n) => Number(n)) as [
          number,
          number
        ];
      } else {
        return [minValueNumber, Number(valueProps)];
      }
    }, [valueProps, minValueNumber]);

    const [wasSliding, setWasSliding] = useState(false);

    const updatedValueFromProps = useMemo(() => {
      const range = maxValueNumber - minValueNumber;

      const result = [
        valuePropsNumber[0] < minValueNumber
          ? 0
          : (valuePropsNumber[0] - minValueNumber) / range,
        valuePropsNumber[1] > maxValueNumber
          ? 1
          : (valuePropsNumber[1] - minValueNumber) / range,
      ];

      /**
       * возвращает [0...1, 0...1] в зависимости от переданных value / min / max
       */
      return result;
    }, [valuePropsNumber, minValueNumber, maxValueNumber, precision]);

    useEffect(() => {
      if ((isSlidingOne || isSlidingTwo) && !wasSliding) {
        setWasSliding(true);
      }
      // TODO удалить лишние?
    }, [
      isSlidingOne,
      isSlidingTwo,
      wasSliding,
      minValueNumber,
      maxValueNumber,
    ]);

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

        return [
          Number(newValue1.toFixed(precision)),
          Number(newValue2.toFixed(precision)),
        ];
      } else {
        prevRestrictionsRef.current.min = minValueNumber;
        prevRestrictionsRef.current.max = maxValueNumber;

        return [
          Number(
            valuePropsNumber[0] < minValueNumber
              ? 0
              : valuePropsNumber[0].toFixed(precision)
          ),
          Number(
            valuePropsNumber[1] > maxValueNumber
              ? maxValueNumber
              : valuePropsNumber[1].toFixed(precision)
          ),
        ];
      }
    }, [
      wasSliding,
      valuePropsNumber,
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
          console.log("!SINGLE", computedValueToCallback);
          onChange(computedValueToCallback[1], {
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

    const startOffset = `${updatedValueFromProps[0] * 100}%`;
    const endOffset = `${updatedValueFromProps[1] * 100}%`;

    const filledWidth = `${
      updatedValueFromProps[1] * 100 - updatedValueFromProps[0] * 100
    }%`;

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
            left: startOffset,
            width: filledWidth,
          }}
        />

        {isDoubleRef.current && (
          <div
            ref={sliderOneRef}
            className={classNames.wrapperClassName}
            style={{
              display: isDoubleRef.current ? "none" : "initial",
            }}
          >
            <span className={classNames.lineClassName} />

            <span
              className={classNames.pointWrapperClassName}
              ref={sliderOnePointRef}
              style={{
                left: startOffset,
              }}
            >
              <span
                className={classNames.pointClassName}
                data-is-sliding={isSlidingOne}
              />
            </span>
          </div>
        )}

        <div ref={sliderTwoRef} className={classNames.wrapperClassName}>
          <span className={classNames.lineClassName} />

          <span
            className={classNames.pointWrapperClassName}
            ref={sliderTwoPointRef}
            style={{
              left: endOffset,
            }}
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
