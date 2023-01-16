import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSlider } from "react-use";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";

export type onChangeSliderFn = (
  rawValue: number,
  value: number,
  params: {
    isSliding: boolean;
    name?: string;
  }
) => void;

interface TagProps extends IThemedProps {
  name?: string;
  value: number;
  tooltipValue?: any;
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

  onChange: onChangeSliderFn;
}

const isDiff = (a: any, b: any) => {
  if (a === -1) return false;

  return a !== b;
};

export const Slider: FC<TagProps> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    precision = 0,
    name,
    value: valueProps,
    tooltipValue = valueProps,
    minValue,
    maxValue,
    onChange,
  }) => {
    const [isHover, setIsHover] = useState(false);

    const handleHoverOn = useCallback(() => {
      setIsHover(true);
    }, []);
    const handleHoverOff = useCallback(() => {
      setIsHover(false);
    }, []);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const sliderPointRef = useRef<HTMLSpanElement>(null);
    /**
     * value - число 0...1
     */
    const { isSliding, value } = useSlider(wrapperRef);

    const valuePropsNumber = useMemo(() => Number(valueProps), [valueProps]);
    const minValueNumber = useMemo(() => Number(minValue), [minValue]);
    const maxValueNumber = useMemo(() => Number(maxValue), [maxValue]);

    const [wasSliding, setWasSliding] = useState(false);

    const updatedValueFromProps = useMemo(() => {
      /**
       * возвращает 0...1 в зависимости от переданных value / min / max
       */
      if (valuePropsNumber! < minValueNumber) return 0;

      if (valuePropsNumber! > maxValueNumber) return 1;

      const range = maxValueNumber - minValueNumber;
      const result = (valuePropsNumber! - minValueNumber) / range;

      return result;
    }, [valuePropsNumber, minValueNumber, maxValueNumber, precision]);
    const old = useRef({ min: -1, max: -1 });

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

      const tooltipWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "tooltipWrapper"
      );
      const tooltipValueClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "tooltipValue"
      );

      return {
        wrapperClassName,
        filledLineClassName,
        lineClassName,
        pointWrapperClassName,
        pointClassName,
        tooltipWrapperClassName,
        tooltipValueClassName,
      };
    }, [classes, baseAppearance, appearance]);

    useEffect(() => {
      if (isSliding && !wasSliding) {
        setWasSliding(true);
      }
    }, [isSliding, wasSliding, minValueNumber, maxValueNumber]);

    const rawValue = useMemo(() => {
      const someDiff =
        isDiff(old.current.min, minValueNumber) ||
        isDiff(old.current.max, maxValueNumber);

      if (wasSliding && !someDiff) {
        const newValue =
          minValueNumber + (maxValueNumber - minValueNumber) * value;

        old.current.min = minValueNumber;
        old.current.max = maxValueNumber;

        return Number(newValue.toFixed(precision));
      } else {
        if (valuePropsNumber < minValueNumber) return 0;

        if (valuePropsNumber > maxValueNumber) return 1;

        old.current.min = minValueNumber;
        old.current.max = maxValueNumber;

        return Number(valuePropsNumber.toFixed(precision));
      }
    }, [
      wasSliding,
      valuePropsNumber,
      value,
      minValueNumber,
      maxValueNumber,
      precision,
    ]);

    const prevValueRef = useRef(valueProps);

    const newValue = useMemo(() => {
      if (isSliding) {
        return prevValueRef.current;
      } else {
        prevValueRef.current = rawValue;

        return rawValue;
      }
    }, [rawValue, isSliding]);

    useEffect(() => {
      if (wasSliding) {
        onChange(rawValue, newValue, { isSliding, name });
      }
    }, [wasSliding, rawValue, isSliding, onChange, name]);

    const filledOffsetLeft = `${updatedValueFromProps * 100}%`;

    return (
      <>
        <div
          style={{
            position: "relative",
            height: "20px",
            width: "400px",
          }}
        >
          <div ref={wrapperRef} className={classNames.wrapperClassName}>
            <span className={classNames.lineClassName} />
            <span
              className={classNames.filledLineClassName}
              style={{
                width: filledOffsetLeft,
              }}
            />
            <span
              className={classNames.pointWrapperClassName}
              ref={sliderPointRef}
              style={{
                left: filledOffsetLeft,
              }}
              onMouseEnter={handleHoverOn}
              onMouseLeave={handleHoverOff}
            >
              <span
                className={classNames.pointClassName}
                data-is-sliding={isSliding}
              />
            </span>{" "}
            <span
              data-is-sliding={isSliding || isHover}
              className={classNames.tooltipWrapperClassName}
              style={{
                left: filledOffsetLeft,
              }}
            >
              <span className={classNames.tooltipValueClassName}>
                {tooltipValue}
              </span>
            </span>
          </div>
        </div>
      </>
    );
  }
);
