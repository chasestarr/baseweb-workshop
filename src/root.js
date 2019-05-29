import React from "react";
import {styled} from "baseui";
import {Block} from "baseui/block";
import {Tag} from "baseui/tag";

import {Router, Route, Switch} from "fusion-plugin-react-router";

import ComponentOverrides from "./lessons/component-overrides";
import CSSInJSWithStyletron from "./lessons/css-in-js-with-styletron";
import CustomizingThemes from "./lessons/customizing-themes";
import UXPatternsForDevelopers from "./lessons/ux-patterns-for-developers";
import WorkingWithADesignSystem from "./lessons/working-with-a-design-system";

const Border = styled("div", props => {
  return {
    border: `solid 1px ${props.$theme.colors.primary}`,
    borderRadius: props.$theme.borders.radius200,
    minHeight: "98vh",
  };
});

const Label = styled("div", props => {
  return {
    ...props.$theme.typography.font100,
    backgroundColor: props.$theme.colors.primary,
    borderBottomRightRadius: props.$theme.borders.radius100,
    color: props.$theme.colors.mono100,
    display: "inline",
    paddingLeft: props.$theme.sizing.scale200,
    paddingRight: props.$theme.sizing.scale200,
    paddingTop: props.$theme.sizing.scale100,
    paddingBottom: props.$theme.sizing.scale100,
    position: "absolute",
  };
});

function Wrapper(props) {
  return (
    <Border>
      <Label>Base Web Workshop</Label>
      {props.children}
    </Border>
  );
}

const Center = styled("div", props => {
  display: "flex";
});

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
  <Wrapper>
    <Switch>
      <Route exact path="/component-overrides" component={ComponentOverrides} />

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
);
export default root;
