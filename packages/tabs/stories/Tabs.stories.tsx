import { ThemeProvider, JssProvider } from "react-jss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import {
  Tab,
  TabContext,
  TabList,
  TabPanel,
  tabsReducer,
  TABS_STATE_NAMESPACE,
} from "../src";

import { TABS } from "./tabs";
import { theme } from "./theme";

const reducer = { [TABS_STATE_NAMESPACE]: tabsReducer };
const store = configureStore({ reducer });

const WithStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default {
  title: "Tabs",
  decorators: [
    (Story) => (
      <WithStore>
        <Story />
      </WithStore>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "lightblue",
      values: [{ name: "lightblue", value: "#E5ECF7" }],
    },
  },
};

const TABS_NAME = "storybook-demo";

interface IDefaultTemplateProps {
  isDucksTabDisabled: boolean;
}

const DefaultTemplate = ({ isDucksTabDisabled }: IDefaultTemplateProps) => {
  // const dispatch = useDispatch();
  // const handleChange: OnClickFn = useCallback((_event, panelName) => {
  //   dispatch(
  //     tabsActions.setActiveTab({
  //       tabsName: TABS_NAME,
  //       activePanelName: panelName,
  //     })
  //   );
  // }, []);

  return (
    <TabContext tabsName={TABS_NAME} defaultActiveTabName={TABS[0].panelName}>
      <TabList>
        {TABS.map(({ panelName, label }) => {
          return (
            <Tab
              label={label}
              panelName={panelName}
              key={panelName}
              disabled={panelName === "Ducks" && isDucksTabDisabled}
            />
          );
        })}
      </TabList>

      {TABS.map(({ Component, panelName }) => (
        <TabPanel panelName={panelName} key={panelName}>
          <div
            style={{
              width: "500px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid black",
              marginTop: "30px",
            }}
          >
            <Component />
          </div>
        </TabPanel>
      ))}
    </TabContext>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  isDucksTabDisabled: true,
};

const ThemedTemplate = ({ isDucksTabDisabled }: IDefaultTemplateProps) => {
  // const dispatch = useDispatch();
  // const handleChange: OnClickFn = useCallback((_event, panelName) => {
  //   dispatch(
  //     tabsActions.setActiveTab({
  //       tabsName: TABS_NAME,
  //       activePanelName: panelName,
  //     })
  //   );
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <JssProvider
        generateId={({ key }, styleSheet) => {
          if (!styleSheet?.options.classNamePrefix) {
            if (process.env.NODE_ENV === "development") {
              console.error(
                "classNamePrefix not passed in some createUseStyles function"
              );
            }
          }

          styleSheet?.options.classNamePrefix;

          return styleSheet?.options.classNamePrefix + key;
        }}
      >
        <TabContext
          tabsName={TABS_NAME}
          defaultActiveTabName={TABS[0].panelName}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginRight: "40px",
              }}
            >
              <TabList appearance="verticalTabList">
                {TABS.map(({ panelName, label }) => {
                  return (
                    <Tab
                      label={label}
                      panelName={panelName}
                      key={panelName}
                      appearance="verticalTabList"
                      disabled={panelName === "Ducks" && isDucksTabDisabled}
                    />
                  );
                })}
              </TabList>
            </div>

            {TABS.map(({ Component, panelName }) => (
              <TabPanel panelName={panelName} key={panelName}>
                <div
                  style={{
                    width: "500px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid black",
                    marginTop: "30px",
                  }}
                >
                  <Component />
                </div>
              </TabPanel>
            ))}
          </div>
        </TabContext>
      </JssProvider>
    </ThemeProvider>
  );
};

export const Themed = ThemedTemplate.bind({});

Themed.args = Default.args;
