import {
  FC,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Transition } from "react-transition-group";
import { ENTERED, ENTERING, EXITING } from "react-transition-group/Transition";
import { useTheme } from "react-jss";

import { getClassName, ITheme, IThemedProps } from "@cheaaa/theme";
import { Portal } from "@cheaaa/portal";
import { Blanket } from "@cheaaa/blanket";

import { DEFAULT_ANIMATION_DURATION } from "./styles/consts";
import { useStyles } from "./styles";
import { CloseIcon } from "./CloseIcon";
import { ComponentNames } from "./styles/types";
export interface IModalProps extends IThemedProps {
  /**
   * Открыта ли модалка сейчас
   */
  isOpen: boolean;

  /**
   * Функция вызываемая после клика на крестик закрытия / overlay (если closeClickByBlanket = true)
   */
  onClose: (name?: string) => void;
  appearance?: string;

  /**
   * Имя модалки, попадает в функцию закрытия. в основном для ConnectedModal
   */
  name?: string;

  /**
   * Заголовок модалки.ВВозможен JSX элемент
   */
  title?: JSX.Element | string | number;

  /**
   * Наличие overlay за модалкой
   */
  withBlanket?: boolean;

  /**
   * Наличие кнопки закрытия
   */
  withCloseButton?: boolean;

  /**
   * Закрыть ли модалку при клике на overlay за ней
   */
  closeClickByBlanket?: boolean;

  /**
   * Необходимо ли сфокусировать обёртку над children.
   * Необходимо для мобильных устройств для правильного скролла
   */
  focusAfterRender?: boolean;

  /**
   * Длительность анимации
   */
  animationDuration?: `${number}.${number}s` | `${number}ms`;

  children: ReactNode;
}

export const Modal: FC<IModalProps> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    children,
    isOpen = false,
    onClose,
    name,
    title,
    withBlanket = true,
    withCloseButton = true,
    closeClickByBlanket = true,
    focusAfterRender = true,
  }) => {
    const childrenWrapperRef = useRef<HTMLDivElement>(null);
    const transitionRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const classes = useStyles();
    const handleClose = useCallback(() => {
      onClose(name);
    }, [onClose, name]);
    const theme = useTheme<ITheme>();

    const animationDuration =
      theme?.transition?.duration || DEFAULT_ANIMATION_DURATION;

    useEffect(() => {
      if (isOpen && focusAfterRender) {
        // мобильные браузеры (ios)
        // теряют фокус и скроллят не модалку а body
        // это хоть как то спасает ситуацию
        childrenWrapperRef.current?.focus();
      }
    }, [isOpen, focusAfterRender]);

    const classNames = useMemo(() => {
      const modalContentClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "modalContent"
      );
      const headerWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "headerWrapper"
      );
      const titleWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "titleWrapper"
      );
      const closeButtonClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "closeButton"
      );
      const childrenWrapperClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "childrenWrapper"
      );

      return {
        modalContentClassName,
        headerWrapperClassName,
        titleWrapperClassName,
        closeButtonClassName,
        childrenWrapperClassName,
      };
    }, [classes, baseAppearance, appearance]);

    return (
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
            const blanketComponent = withBlanket && (
              <Blanket
                onClick={closeClickByBlanket ? handleClose : undefined}
                appearance={appearance}
                isVisible={isOpen}
              />
            );

            const modalComponent = [ENTERING, ENTERED, EXITING].includes(
              animationState
            ) && (
              <div ref={transitionRef}>
                <div
                  ref={modalContentRef}
                  className={classNames.modalContentClassName}
                  /**
                   * Текущее состояние анимации.
                   * Для стилизации необходимо использовать константы из react-transition-group/Transition
                   * аналогично описанному в defaultTheme.ts
                   */
                  data-animation-state={animationState}
                >
                  <div className={classNames.headerWrapperClassName}>
                    <div className={classNames.titleWrapperClassName}>
                      {title}
                    </div>
                    {withCloseButton && (
                      <button
                        className={classNames.closeButtonClassName}
                        onClick={handleClose}
                      >
                        <CloseIcon />
                      </button>
                    )}
                  </div>

                  <div
                    tabIndex={1}
                    ref={childrenWrapperRef}
                    className={classNames.childrenWrapperClassName}
                  >
                    {children}
                  </div>
                </div>
              </div>
            );

            return (
              <>
                {blanketComponent}
                {modalComponent}
              </>
            );
          }}
        </Transition>
      </Portal>
    );
  }
);
