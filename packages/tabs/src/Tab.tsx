import { getClassName, IThemedProps } from "@cheaaa/theme";
import {
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";

import { Context } from "./context";
import { tabsActions } from "./slice";
import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import { OnClickFn, onRenderFn } from "./types";

interface ITab extends IThemedProps {
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
    const classes = useStyles();
    const { activePanelName, tabsName } = useContext(Context);
    const elemRef = useRef<HTMLButtonElement>(null);

    const dispatch = useDispatch();

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        elemRef.current?.scrollIntoView({ inline: "center" });
        dispatch(
          tabsActions.setActiveTab({
            tabsName,
            activePanelName: panelName,
          })
        );
        onClick?.(e, panelName);
      },
      [onClick, panelName]
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
        // className={classNames(
        //     classes.tabLabel,
        //     panelName === activePanelName && classes.tabLabelSelected
        // )}
        disabled={disabled}
        data-selected={String(panelName === activePanelName)}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
);
