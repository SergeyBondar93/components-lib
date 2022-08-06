import { getClassName, IThemedProps } from "@cheaaa/theme";
import {
  useState,
  ReactNode,
  useMemo,
  ReactElement,
  useCallback,
  useRef,
} from "react";
import React from "react";
import { Transition } from "react-transition-group";
import { useClickOutsideComponent } from "@cheaaa/utils";
import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";

import { HeaderComponentNames } from "./styles/types";
import { useHeaderStyles } from "./styles";

export type GetHeightStylesFn = (args: {
  isOpen: boolean;
  height: number;
}) => number;

export interface IAccordionChildrenProps {
  /**
   * передаётся из компонента Accordion, опциональность указана что бы ТС не требовал передавать в приложении
   */
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * передаётся из компонента Accordion, опциональность указана что бы ТС не требовал передавать в приложении
   */
  isOpen?: boolean;
}

export interface IBaseAccordionProps extends IThemedProps {
  /**
   * Текст на Title Button.
   */
  title?: string | ReactNode;
  children: ReactNode;

  /**
   * Длительность анимации разворачивания, не больше 0.5s
   *
   */
  animationDuration?: `0.${number}s`;
}

export interface IAccordionChildrenProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderDropdown = ({
  baseAppearance = "base",
  appearance = "base",
  title,
  children,
  animationDuration: animationDurationProps = "0.3s",
}: IBaseAccordionProps) => {
  const classes = useHeaderStyles();
  const transitionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    setIsOpen((isOpen) => !isOpen);
  }, []);

  useClickOutsideComponent(wrapperRef, handleClose);

  const animationDuration = useMemo(
    () => parseFloat(animationDurationProps) * 1000,
    [animationDurationProps]
  );

  const mappedChildren = useMemo(() => {
    return React.Children.map(children as ReactElement, (child) => {
      return React.cloneElement(child, {
        handleClose,
      });
    });
  }, [children, handleClose]);

  return (
    <div className={classNames.dropdownWrapperClassName} ref={wrapperRef}>
      <button
        onClick={toggleOpen}
        className={classNames.dropdownTitleClassName}
      >
        {title}
      </button>

      <Transition
        timeout={{
          enter: 0,
          exit: animationDuration,
        }}
        in={isOpen}
        nodeRef={transitionRef}
      >
        {(animationState) => {
          return (
            [ENTERING, ENTERED, EXITING].includes(animationState) && (
              <div
                className={classNames.dropdownBodyClassName}
                data-animation-state={animationState}
                ref={transitionRef}
              >
                {mappedChildren}
              </div>
            )
          );
        }}
      </Transition>
    </div>
  );
};
