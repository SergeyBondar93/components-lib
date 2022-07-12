import { Button, IButtonProps } from "@cheaaa/button";
import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useState, useRef, useEffect, ReactNode, useMemo } from "react";

import { Icon } from "./Icon";
import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";

export type GetHeightStylesFn = (args: {
  isOpen: boolean;
  height: number;
}) => number;

export interface IAccordionProps extends IThemedProps {
  /**
   * Текст на Title Button
   */
  title: string | ReactNode;
  children: ReactNode;
  isOpen?: boolean;

  /**
   * Функция для вычисления кастомной высоты body. Принимает isOpen и высчитанную высоту самим компонентом
   */
  getHeightStyles?: GetHeightStylesFn;

  /**
   * Props для кастомизации Title Button,
   */
  titleButtonProps?: IButtonProps<any>;
  // TODO Типизирование передаваемого кастомного компонента вместо кнокпи не удалось нормально сделать
  // достаточно болезненное занятие, что бы при передаче компонента показывались пропсы которые относятся к нему
}

export const Accordion = ({
  baseAppearance = "base",
  appearance = "base",
  isOpen: isOpenProps = false,
  title,
  children,
  getHeightStyles,
  titleButtonProps = {},
}: IAccordionProps) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(isOpenProps);
  const [height, setHeight] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const childrenWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const top = bodyRef.current?.getBoundingClientRect().top!;
    const bottom = childrenWrapperRef.current?.getBoundingClientRect().bottom!;
    const height = bottom - top;
    setHeight(height);
  }, [children]);

  useEffect(() => {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
    const titleClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "title"
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
      titleClassName,
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

  return (
    <div className={classNames.wrapperClassName}>
      <Button
        shouldFitContent
        onClick={() => setIsOpen(!isOpen)}
        // TODO сделать строку дефолтного аппиранса константой и экспортировать
        appearance={titleButtonProps.appearance || "accordion-title"}
        {...titleButtonProps}
      >
        <Icon
          className={classNames.iconClassName}
          data-is-open={String(!!isOpen)}
        />

        {title}
      </Button>
      <div
        ref={bodyRef}
        className={classNames.bodyClassName}
        style={{
          height: _height,
        }}
      >
        <div
          ref={childrenWrapperRef}
          className={classNames.childrenWrapperClassName}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
