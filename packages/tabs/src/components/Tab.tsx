import { getClassName, IThemedProps } from "@cheaaa/theme";
import {
  memo,
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

import { Context } from "./context";
import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import { OnClickFn, onRenderFn } from "./types";

export interface ITab extends IThemedProps {
  /**
   * Имя отображаемое пользователю
   */
  label: string | number | JSX.Element;
  /**
   * техническое имя используемое для определения активного таба, должны быть уникальны
   */
  panelName: string;

  /**
   * отключает таб только здесь. попасть на него можно кинув action tabsActions.setActiveTab
   */
  disabled?: boolean;
  /**
   * фнукиця при клике на таб
   */
  onClick?: OnClickFn;

  delayBeforeCreatingCoordsMap?: number;
  onRender?: onRenderFn;
}
export const Tab = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    label,
    panelName,
    onClick,
    onRender,
    disabled,
    delayBeforeCreatingCoordsMap,
  }: ITab) => {
    const { activePanelName, tabsName, setActivePanelName } =
      useContext(Context);
    const classes = useStyles();
    const elemRef = useRef<HTMLButtonElement>(null);

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        elemRef.current?.scrollIntoView({ inline: "center" });
        setActivePanelName({ tabsName, panelName });
        onClick?.(e);
      },
      [onClick, panelName, tabsName, panelName]
    );

    useEffect(() => {
      setTimeout(() => {
        const { left, width } = elemRef.current?.getBoundingClientRect()!;
        onRender!({ left, width, panelName });
      }, delayBeforeCreatingCoordsMap);
    }, []);

    const className = useMemo(() => {
      return getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "tabLabel"
      );
    }, []);

    return (
      <button
        ref={elemRef}
        className={className}
        disabled={disabled}
        data-selected={String(panelName === activePanelName)}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
);
