import { getClassName, IThemedProps } from "@cheaaa/theme";
import React, {
  FC,
  memo,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useContext } from "react";

import { Context } from "./context";
import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import { onRenderFn } from "./types";

interface ITabList extends IThemedProps {
  children: ReactElement[];
  /**
   * Для подсветки текущего таба строится карта координат лейблов,
   * в случае анимированного появления необходимо передать количетсво ms задержки
   * перед построением карты,
   * в противном случае она будет построена не правильно
   */
  delayBeforeCreatingCoordsMap?: number;
}

type TabsCoords = {
  [key: string]: {
    left: number;
    width: number;
  };
};

export const TabList: FC<ITabList> = memo(
  ({
    baseAppearance = "base",
    appearance = "base",
    children,
    delayBeforeCreatingCoordsMap,
  }) => {
    const classes = useStyles();
    const { activePanelName } = useContext(Context);
    const [tabsCoords, setTabsCoords] = useState<TabsCoords>({});
    const tabsRef = useRef<HTMLDivElement>(null);

    const onRender: onRenderFn = useCallback(({ panelName, left, width }) => {
      const computedLeft =
        left - tabsRef.current?.getBoundingClientRect().left!;
      setTabsCoords((v) => ({
        ...v,
        [panelName]: { left: computedLeft, width },
      }));
    }, []);

    const tabs = useMemo(() => {
      return React.Children.map(children as ReactElement[], (child) => {
        return React.cloneElement(child, {
          onRender,
          delayBeforeCreatingCoordsMap,
        });
      });
    }, [children, onRender]);

    const classNames = useMemo(() => {
      const tabListClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "tabList"
      );
      const highlighterClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "highlighter"
      );

      return { tabListClassName, highlighterClassName };
    }, []);

    return (
      <div className={classNames.tabListClassName} ref={tabsRef}>
        {tabs}
        <span
          className={classNames.highlighterClassName}
          style={{
            left: (tabsCoords[activePanelName]?.left || 0) + "px",
            width: (tabsCoords[activePanelName]?.width || 0) + "px",
          }}
        ></span>
      </div>
    );
  }
);
