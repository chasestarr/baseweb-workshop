// @flow
import React from "react";
import { BaseProvider, LightTheme, useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Tag } from "baseui/tag";

import { Router, Route, Switch } from "fusion-plugin-react-router";

import SimpleComponentOverrides from "./lessons/simple-component-overrides";
import ComponentOverrides from "./lessons/component-overrides";
import CSSInJSWithStyletron from "./lessons/css-in-js-with-styletron";
import CustomizingThemes from "./lessons/customizing-themes";
import UXPatternsForDevelopers from "./lessons/ux-patterns-for-developers";
import WorkingWithADesignSystem from "./lessons/working-with-a-design-system";

const Root = () => {
  const [css] = useStyletron();
  return (
    <BaseProvider theme={LightTheme}>
      <div
        className={css({
          padding: "2em",
          marginBottom: "10em"
        })}
      >
        <Switch>
          <Route
            exact
            path="/simple-component-overrides"
            component={SimpleComponentOverrides}
          />
          <Route
            exact
            path="/component-overrides"
            component={ComponentOverrides}
          />

          <Route
            exact
            path="/css-in-js-with-styletron"
            component={CSSInJSWithStyletron}
          />

          <Route
            exact
            path="/customizing-themes"
            component={CustomizingThemes}
          />

          <Route
            exact
            path="/ux-patterns-for-developers"
            component={UXPatternsForDevelopers}
          />

          <Route
            exact
            path="/working-with-a-design-system"
            component={WorkingWithADesignSystem}
          />

          <Route
            exact
            path="/"
            component={() => (
              <Block display="flex" justifyContent="center" font="font500">
                <ul>
                  <li>
                    <a href="/css-in-js-with-styletron">
                      css in js with styletron
                    </a>
                  </li>

                  <li>
                    <a href="/simple-component-overrides">
                      simple component overrides
                    </a>
                  </li>

                  <li>
                    <a href="/component-overrides">component overrides</a>
                  </li>

                  <li>
                    <a href="/customizing-themes">customizing themes</a>
                  </li>

                  <li>
                    <a href="/ux-patterns-for-developers">
                      ( ux patterns for developers )
                    </a>
                  </li>
                  <li>
                    <a href="/working-with-a-design-system">
                      ( working with a design system )
                    </a>
                  </li>
                </ul>
              </Block>
            )}
          />

          <Route
            component={() => (
              <Block display="flex" alignItems="center" justifyContent="center">
                <Block font="font500">Page not found</Block>
              </Block>
            )}
          />
        </Switch>
      </div>
    </BaseProvider>
  );
};
export default Root;
