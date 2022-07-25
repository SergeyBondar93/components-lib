import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useClickOutsideComponent } from "@cheaaa/utils";
import React from "react";

import { BaseAccordion, IBaseAccordionProps } from "../../accordion/src";

import { DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE, useStyles } from "./styles";

export interface IDropdownProps
  extends Omit<
    IBaseAccordionProps,
    "classes" | "defaultTitleButtonAppearance"
  > {}

export interface IDropdownChildrenProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dropdown = ({
  isOpen: isOpenProps,
  titleButtonProps: titleButtonPropsFromProps,
  children,
  ...props
}: IDropdownProps) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(isOpenProps);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const titleButtonProps = useMemo(() => {
    return {
      ...titleButtonPropsFromProps,
      onClick: toggleOpen,
    };
  }, [titleButtonPropsFromProps, toggleOpen]);

  useClickOutsideComponent(accordionRef, handleClose);

  const childrenWithSetIsOpen = useMemo(() => {
    return React.Children.map(children as ReactElement, (child) => {
      return React.cloneElement(child, {
        setIsOpen,
      });
    });
  }, [children, setIsOpen]);

  return (
    <BaseAccordion
      {...props}
      isOpen={isOpen}
      classes={classes}
      titleButtonProps={titleButtonProps}
      ref={accordionRef}
      defaultTitleButtonAppearance={DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE}
      animationDuration="0.0s"
    >
      {childrenWithSetIsOpen}
    </BaseAccordion>
  );
};
