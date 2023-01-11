import {
  useState,
  useRef,
  useEffect,
  ReactNode,
  useMemo,
  forwardRef,
  ReactElement,
  useCallback,
} from "react";
import { Classes } from "jss";
import React from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";
import { Button, IButtonProps } from "@cheaaa/button";

import { Icon } from "./Icon";
import { ComponentNames } from "./styles/types";

export type GetHeightStylesFn = (args: {
  isOpen: boolean;
  height: number | "auto";
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
  title?:
    | string
    | ReactNode
    | ((args: { isOpen: boolean }) => string | ReactNode);
  children: ReactNode;
  isOpen?: boolean;

  /**
   * Передать ли props setIsOpen и isOpen в компонент
   * для управления состоянием isOpen
   */
  passSetIsOpenToChildren?: boolean;
  /**
   * Передать ли props setIsOpen и isOpen в title компонент из titleButtonProps
   * для управления состоянием isOpen
   */
  passSetIsOpenToTitle?: boolean;

  /**
   * Длительность анимации разворачивания, не больше 0.5s
   * none - для отключения установки свойства в inline styles
   *
   */
  animationDuration?: `0.${number}s` | "none";

  /**
   * Функция для вычисления кастомной высоты body. Принимает isOpen и высчитанную высоту самим компонентом
   */
  getHeightStyles?: GetHeightStylesFn;

  /**
   * Делает width: 100%
   */
  shouldFitContent?: boolean;

  /**
   * Props для кастомизации Title Button,
   * если передан component, все остальные props попадут к нему + onClick для управления isOpen (работает как toggle),
   * + shouldFitContent
   */
  titleButtonProps?: IButtonProps<any>;
  // TODO Типизирование передаваемого кастомного компонента вместо кнокпи не удалось нормально сделать
  // достаточно болезненное занятие, что бы при передаче компонента показывались пропсы которые относятся к нему

  classes: Classes<string>;
  defaultTitleButtonAppearance: string;
}

export interface IAccordionChildrenProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BaseAccordion = forwardRef<HTMLDivElement, IBaseAccordionProps>(
  (
    {
      baseAppearance = "base",
      appearance = "base",
      isOpen: isOpenProps = false,
      title: titleProps,
      children,
      getHeightStyles,
      titleButtonProps: titleButtonPropsFromProps = {},
      animationDuration: animationDurationProps = "0.2s",
      defaultTitleButtonAppearance,
      classes,
      shouldFitContent,
      passSetIsOpenToChildren,
      passSetIsOpenToTitle,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(isOpenProps);
    const [height, setHeight] = useState<"auto" | number>(
      isOpenProps ? "auto" : 0
    );
    const bodyRef = useRef<HTMLDivElement>(null);
    const childrenWrapperRef = useRef<HTMLDivElement>(null);
    const [isFullOpened, setIsFullOpened] = useState(isOpenProps);

    const animationRef = useRef<any>(true);

    const animationDuration = useMemo(
      () => parseFloat(animationDurationProps) * 1000,
      [animationDurationProps]
    );

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
      const observer = new ResizeObserver(([entry]) => {
        animationRef.current = false;

        // убираем warn о memory leak, если мы показываем компонент
        // и сразу его скрываем например из за не видимости на этом типе девайса,
        // пытался установиться его размер хотя он был unmount
        if (entry.target && entry.contentRect.height) {
          setHeight(entry.contentRect.height);
        }

        timeout = setTimeout(() => {
          animationRef.current = true;
        }, 600);
      });
      childrenWrapperRef.current &&
        observer.observe(childrenWrapperRef.current);

      return () => {
        clearTimeout(timeout);
        childrenWrapperRef.current &&
          observer.unobserve(childrenWrapperRef.current);
      };
    }, []);

    useEffect(() => {
      setIsOpen(isOpenProps);
    }, [isOpenProps]);

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

      if (isOpen) {
        timeout = setTimeout(() => {
          setIsFullOpened(true);
        }, animationDuration);
      } else {
        setIsFullOpened(false);
      }

      return () => {
        clearTimeout(timeout);
      };
    }, [isOpen, animationDuration]);

    const classNames = useMemo(() => {
      const wrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "wrapper"
      );
      const iconClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "icon"
      );
      const bodyClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "body"
      );
      const childrenWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "childrenWrapper"
      );

      return {
        wrapperClassName,
        iconClassName,
        bodyClassName,
        childrenWrapperClassName,
      };
    }, [classes, baseAppearance, appearance]);

    const _height = useMemo(() => {
      if (getHeightStyles) {
        return getHeightStyles({ isOpen, height });
      }

      return isOpen ? height : 0;
    }, [getHeightStyles, isOpen, height]);

    const toggleOpen = useCallback(() => {
      setIsOpen((isOpen) => !isOpen);
    }, []);

    const title = useMemo(() => {
      return typeof titleProps === "function"
        ? titleProps({ isOpen })
        : titleProps;
    }, [titleProps, isOpen]);

    /* 
    компоненту который передан в titleButtonProps 
    необходимо принять и обработать setIsOpen 
    это обработка открывания закрывания dropdown
  */
    const titleButtonProps = useMemo(() => {
      return {
        onClick: toggleOpen,
        ...titleButtonPropsFromProps,
        ...(passSetIsOpenToTitle ? { setIsOpen, isOpen } : {}),
      };
    }, [titleButtonPropsFromProps, toggleOpen, isOpen, passSetIsOpenToTitle]);

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
      <div
        className={classNames.wrapperClassName}
        ref={ref}
        data-shouldfitcontent={String(!!shouldFitContent)}
      >
        <Button
          shouldFitContent
          appearance={defaultTitleButtonAppearance}
          {...titleButtonProps}
        >
          <Icon
            className={classNames.iconClassName}
            /**
             * Началось ли открытие аккордиона
             */
            data-is-open={String(!!isOpen)}
          />

          {title}
        </Button>
        <div
          ref={bodyRef}
          className={classNames.bodyClassName}
          style={{
            height: _height,
            transition:
              animationDurationProps !== "none" && animationRef.current
                ? animationDurationProps
                : undefined,
          }}
          /**
           * Открыт ли аккордион полностью
           */
          data-is-opened={String(!!isFullOpened)}
        >
          <div
            ref={childrenWrapperRef}
            className={classNames.childrenWrapperClassName}
          >
            {mappedChildren}
          </div>
        </div>
      </div>
    );
  }
);
