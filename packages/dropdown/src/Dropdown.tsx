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
import { BaseAccordion, IBaseAccordionProps } from "@cheaaa/accordion";

import { DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE, useStyles } from "./styles";

export interface IDropdownChildrenProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDropdownProps
  extends Omit<
    IBaseAccordionProps,
    "classes" | "defaultTitleButtonAppearance"
  > {
  children: ReactElement<IDropdownChildrenProps>;
  passSetIsOpenToChildren?: boolean;
}

export const Dropdown = ({
  isOpen: isOpenProps,
  titleButtonProps: titleButtonPropsFromProps,
  children,
  passSetIsOpenToChildren,
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

  /* 
    компоненту который передан в titleButtonProps 
    обязательно необходимо принять и обработать onClick 
    это обработка открывания закрывания dropdown
  */
  const titleButtonProps = useMemo(() => {
    return {
      ...titleButtonPropsFromProps,
      onClick: toggleOpen,
      isOpen,
    };
  }, [titleButtonPropsFromProps, toggleOpen, isOpen]);

  useClickOutsideComponent(accordionRef, handleClose);

  const mappedChildren = useMemo(() => {
    return passSetIsOpenToChildren
      ? React.Children.map(children as ReactElement, (child) => {
          return React.cloneElement(child, {
            setIsOpen,
          });
        })
      : children;
  }, [children, passSetIsOpenToChildren, setIsOpen]);

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
      {mappedChildren}
    </BaseAccordion>
  );
};
