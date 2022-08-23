import { getClassName, IThemedProps } from "@cheaaa/theme";
import {
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useRef,
  memo,
  useEffect,
} from "react";
import React from "react";
import { Transition } from "react-transition-group";
import { useClickOutsideComponents } from "@cheaaa/utils";
import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";
import { Portal } from "@cheaaa/portal";

import { HeaderComponentNames } from "./styles/types";
import { useHeaderStyles } from "./styles";

export type GetHeightStylesFn = (args: {
  isOpen: boolean;
  height: number;
}) => number;

export interface IBaseAccordionProps extends Required<IThemedProps> {
  /**
   * Текст на Title Button.
   */
  title?: string | ReactNode;
  children: ReactNode;

  /**
   * Длительность анимации появления
   *
   */
  animationDuration?: `${number}.${number}s`;
}

export interface IAccordionChildrenProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderDropdown = memo(
  ({
    baseAppearance,
    appearance,
    title,
    children,
    animationDuration: animationDurationProps = "0.3s",
  }: IBaseAccordionProps) => {
    const classes = useHeaderStyles();
    const transitionRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const [buttonCoords, setButtonCoords] = useState<{
      bottom: number;
      right: number;
    }>({ bottom: 0, right: 0 });

    const [isOpen, setIsOpen] = useState(false);

    const classNames = useMemo(() => {
      const dropdownWrapperClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "dropdownWrapper"
      );
      const dropdownBodyClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "dropdownBody"
      );
      const dropdownTitleClassName = getClassName<HeaderComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "dropdownTitle"
      );

      return {
        dropdownWrapperClassName,
        dropdownBodyClassName,
        dropdownTitleClassName,
      };
    }, [classes, baseAppearance, appearance]);

    const handleClose = useCallback(() => {
      setIsOpen(false);
    }, []);
    const toggleOpen = useCallback(() => {
      const { bottom, right } = (
        wrapperRef.current as HTMLDivElement
      ).getBoundingClientRect()!;

      setButtonCoords({ bottom, right });

      setIsOpen((isOpen) => !isOpen);
    }, []);

    useClickOutsideComponents([transitionRef, toggleButtonRef], handleClose);

    const animationDuration = useMemo(
      () => parseFloat(animationDurationProps) * 1000,
      [animationDurationProps]
    );

    const mappedChildren = useMemo(() => {
      return children;
      // можно передать в компонент children функцию закрытия что бы закрывать дропдаун
      // return React.Children.map(children as ReactElement, (child) => {
      //   return React.cloneElement(child, {
      //     handleClose,
      //   });
      // });
    }, [children, handleClose]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (!isIntersecting) {
            setIsOpen(false);
          }
        },
        { root: null, threshold: 0 }
      );
      observer.observe(wrapperRef.current!);

      return () => {
        wrapperRef.current && observer.unobserve(wrapperRef.current);
        observer.disconnect();
      };
    }, []);

    return (
      <div className={classNames.dropdownWrapperClassName} ref={wrapperRef}>
        <button
          onClick={toggleOpen}
          className={classNames.dropdownTitleClassName}
          ref={toggleButtonRef}
        >
          {title}
        </button>

        <Portal>
          <Transition
            timeout={{
              enter: 0,
              exit: animationDuration,
            }}
            in={isOpen}
            nodeRef={transitionRef}
          >
            {(animationState) => {
              return [ENTERING, ENTERED, EXITING].includes(animationState) ? (
                <div
                  className={classNames.dropdownBodyClassName}
                  /**
                   * Текущее состояние анимации.
                   * Для стилизации необходимо использовать константы из react-transition-group/Transition
                   * аналогично описанному в defaultTheme.ts
                   */
                  data-animation-state={animationState}
                  ref={transitionRef}
                  style={{
                    top: buttonCoords.bottom + "px",
                    left: buttonCoords.right + "px",
                  }}
                >
                  {mappedChildren}
                </div>
              ) : null;
            }}
          </Transition>
        </Portal>
      </div>
    );
  }
);
