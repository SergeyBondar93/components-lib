import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import React from "react";

import { useClickOutsideComponents } from "@cheaaa/utils";
import { BaseAccordion, IBaseAccordionProps } from "@cheaaa/accordion";

import { DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE, useStyles } from "./styles";

export interface IDropdownChildrenProps {
  /**
   * передаётся из компонента Dropdown, опциональность указана что бы ТС не требовал передавать в приложении
   */
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * передаётся из компонента Dropdown, опциональность указана что бы ТС не требовал передавать в приложении
   */
  isOpen?: boolean;
}
export interface IDropdownTitleProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  // функция для toggle isOpen
  onClick: () => void;
}

export interface IDropdownProps
  extends Omit<
    IBaseAccordionProps,
    "classes" | "defaultTitleButtonAppearance"
  > {
  children: ReactElement<IDropdownChildrenProps>;
}

export const Dropdown = ({
  isOpen: isOpenProps,
  titleButtonProps: titleButtonPropsFromProps,
  children,
  passSetIsOpenToChildren,
  passSetIsOpenToTitle,
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
    необходимо принять и обработать setIsOpen 
    это обработка открывания закрывания dropdown
  */
  const titleButtonProps = useMemo(() => {
    return {
      ...titleButtonPropsFromProps,
      onClick: toggleOpen,
      ...(passSetIsOpenToTitle ? { setIsOpen, isOpen } : {}),
    };
  }, [titleButtonPropsFromProps, toggleOpen, isOpen, passSetIsOpenToTitle]);

  useClickOutsideComponents([accordionRef], handleClose);

  const mappedChildren = useMemo(() => {
    return passSetIsOpenToChildren
      ? React.Children.map(children as ReactElement, (child) => {
          return React.cloneElement(child, {
            setIsOpen,
            isOpen,
          });
        })
      : children;
  }, [children, passSetIsOpenToChildren, setIsOpen, isOpen]);

  return (
    <>
      {/* <Portal> */}
      {/* {withBlanket ? <Blanket isVisible={isOpen} /> : null} */}
      <BaseAccordion
        {...props}
        isOpen={isOpen}
        classes={classes}
        titleButtonProps={titleButtonProps}
        ref={accordionRef}
        defaultTitleButtonAppearance={DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE}
        animationDuration="none"
      >
        {mappedChildren}
      </BaseAccordion>
      {/* </Portal> */}
    </>
  );
};
