import { ThemeProvider, JssProvider } from "react-jss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { ConnectedTabs, Tabs, tabsReducer, TABS_STATE_NAMESPACE } from "../src";

import { TABS } from "./tabs";
import { theme } from "./theme";

const reducer = { [TABS_STATE_NAMESPACE]: tabsReducer };
const store = configureStore({ reducer });

const WithStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default {
  title: "Tabs",
  parameters: {
    backgrounds: {
      default: "lightblue",
      values: [{ name: "lightblue", value: "#E5ECF7" }],
    },
  },
};

const TABS_NAME = "storybook-demo";

interface IStoryProps {
  isDucksTabDisabled: boolean;
}

export const Base = ({ isDucksTabDisabled }: IStoryProps) => {
  return (
    <Tabs.TabsContext activePanelName={TABS[0].panelName}>
      <Tabs.TabsList>
        {TABS.map(({ panelName, label }) => {
          return (
            <Tabs.Tab
              label={label}
              panelName={panelName}
              key={panelName}
              disabled={panelName === "Ducks" && isDucksTabDisabled}
            />
          );
        })}
      </Tabs.TabsList>

      {TABS.map(({ Component, panelName }) => (
        <Tabs.TabPanel panelName={panelName} key={panelName}>
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
        </Tabs.TabPanel>
      ))}
    </Tabs.TabsContext>
  );
};

Base.args = {
  isDucksTabDisabled: true,
};

const ConnectedThemedTemplate = ({ isDucksTabDisabled }: IStoryProps) => {
  return (
    <WithStore>
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
          <ConnectedTabs.TabsContext
            tabsName={TABS_NAME}
            defaultActivePanelName={TABS[0].panelName}
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
                <ConnectedTabs.TabsList appearance="verticalTabsList">
                  {TABS.map(({ panelName, label }) => {
                    return (
                      <ConnectedTabs.Tab
                        label={label}
                        panelName={panelName}
                        key={panelName}
                        appearance="verticalTabsList"
                        disabled={panelName === "Ducks" && isDucksTabDisabled}
                      />
                    );
                  })}
                </ConnectedTabs.TabsList>
              </div>

              {TABS.map(({ Component, panelName }) => (
                <ConnectedTabs.TabPanel panelName={panelName} key={panelName}>
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
                </ConnectedTabs.TabPanel>
              ))}
            </div>
          </ConnectedTabs.TabsContext>
        </JssProvider>
      </ThemeProvider>
    </WithStore>
  );
};

export const ConnectedAndThemedTabs = ConnectedThemedTemplate.bind({});

ConnectedAndThemedTabs.args = Base.args;
