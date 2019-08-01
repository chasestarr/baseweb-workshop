import React from "react";
import { BaseProvider, LightTheme, useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Tag } from "baseui/tag";

import { Router, Route, Switch } from "fusion-plugin-react-router";

import ComponentOverrides from "./lessons/component-overrides";
import CSSInJSWithStyletron from "./lessons/css-in-js-with-styletron";
import CustomizingThemes from "./lessons/customizing-themes";
import UXPatternsForDevelopers from "./lessons/ux-patterns-for-developers";
import WorkingWithADesignSystem from "./lessons/working-with-a-design-system";

function Wrapper(props) {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        border: `solid 1px ${theme.colors.primary}`,
        borderRadius: theme.borders.radius200,
        minHeight: "98vh"
      })}
    >
      <div
        className={css({
          ...theme.typography.font100,
          backgroundColor: theme.colors.primary,
          borderBottomRightRadius: theme.borders.radius100,
          color: theme.colors.mono100,
          display: "inline",
          paddingLeft: theme.sizing.scale200,
          paddingRight: theme.sizing.scale200,
          paddingTop: theme.sizing.scale100,
          paddingBottom: theme.sizing.scale100,
          position: "absolute"
        })}
      >
        Base Web Workshop
      </div>
      {props.children}
    </div>
  );
}

function NotFound() {
  return (
    <Block display="flex" alignItems="center" justifyContent="center">
      <Block font="font500">Page not found</Block>
    </Block>
  );
}

function Index() {
  return (
    <Block display="flex" justifyContent="center" font="font500">
      <ul>
        <li>
          <a href="/working-with-a-design-system">
            working with a design system
          </a>
        </li>

        <li>
          <a href="/css-in-js-with-styletron">css in js with styletron</a>
        </li>

        <li>
          <a href="/component-overrides">component overrides</a>
        </li>

        <li>
          <a href="/customizing-themes">customizing themes</a>
        </li>

        <li>
          <a href="/ux-patterns-for-developers">ux patterns for developers</a>
        </li>
      </ul>
    </Block>
  );
}

const root = (
  <BaseProvider theme={LightTheme}>
    <Wrapper>
      <Switch>
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

        <Route exact path="/customizing-themes" component={CustomizingThemes} />

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

        <Route exact path="/" component={Index} />

        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  </BaseProvider>
);
export default root;
