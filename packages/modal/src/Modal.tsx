import { FC, memo, ReactNode, useCallback, useEffect, useRef } from "react";
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
  isOpen: boolean;
  onClose: (name?: string) => void;
  appearance?: string;
  name?: string;
  title?: JSX.Element | string | number;
  withBlanket?: boolean;
  withCloseButton?: boolean;
  closeClickByBlanket?: boolean;
  transformStyle?: string;
  focusAfterRender?: boolean;
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
            return (
              [ENTERING, ENTERED, EXITING].includes(animationState) && (
                <div ref={transitionRef}>
                  {withBlanket && (
                    <Blanket
                      onClick={closeClickByBlanket ? handleClose : undefined}
                      appearance={appearance}
                      isVisible={isOpen}
                    />
                  )}

                  <div
                    ref={modalContentRef}
                    className={getClassName<ComponentNames>(
                      classes,
                      baseAppearance,
                      appearance,
                      "modalContent",
                      animationState
                    )}
                  >
                    <div
                      className={getClassName<ComponentNames>(
                        classes,
                        baseAppearance,
                        appearance,
                        "headerWrapper"
                      )}
                    >
                      <div
                        className={getClassName<ComponentNames>(
                          classes,
                          baseAppearance,
                          appearance,
                          "titleWrapper"
                        )}
                      >
                        {title}
                      </div>
                      {withCloseButton && (
                        <button
                          className={getClassName<ComponentNames>(
                            classes,
                            baseAppearance,
                            appearance,
                            "closeButton"
                          )}
                          onClick={handleClose}
                        >
                          <CloseIcon />
                        </button>
                      )}
                    </div>

                    <div
                      tabIndex={1}
                      ref={childrenWrapperRef}
                      className={getClassName<ComponentNames>(
                        classes,
                        baseAppearance,
                        appearance,
                        "childrenWrapper"
                      )}
                    >
                      {children}
                    </div>
                  </div>
                </div>
              )
            );
          }}
        </Transition>
      </Portal>
    );
  }
);
