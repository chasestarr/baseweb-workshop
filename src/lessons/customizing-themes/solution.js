import React from "react";
import {styled, ThemeProvider, lightThemePrimitives, createTheme} from "baseui";
import {Block} from "baseui/block";
import {Button} from "baseui/button";
import {FormControl} from "baseui/form-control";
import {StatefulInput} from "baseui/input";
import {StatefulTextarea} from "baseui/textarea";

const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const theme = createTheme(
  {
    ...lightThemePrimitives,
    primary50: "#F0EEFE",
    primary100: "#D9D4FC",
    primary200: "#ACA0F9",
    primary300: "#705BF4",
    primary400: "#4327F1",
    primary500: "#331EB7",
    primary600: "#281791",
    primary700: "#1B1060",
  },
  {},
);

const cancelTheme = createTheme({
  ...lightThemePrimitives,
  primary50: theme.colors.negative50,
  primary100: theme.colors.negative100,
  primary200: theme.colors.negative200,
  primary300: theme.colors.negative300,
  primary400: theme.colors.negative400,
  primary500: theme.colors.negative500,
  primary600: theme.colors.negative600,
  primary700: theme.colors.negative700,
});

function CancelButton(props) {
  return (
    <ThemeProvider theme={cancelTheme}>
      <Button {...props} />
    </ThemeProvider>
  );
}

function CustomizingThemes() {
  return (
    <ThemeProvider theme={theme}>
      <Block display="flex" justifyContent="center" font="font500">
        Customizing Themes
      </Block>

      <Block width="500px" margin="scale800">
        <Block font="font500" color="primary600">
          Zber Fresh Grocery Delivery
        </Block>

        <Row>
          <Block width="49%">
            <FormControl label="First Name">
              <StatefulInput />
            </FormControl>
          </Block>

          <Block width="49%">
            <FormControl label="Last Name">
              <StatefulInput />
            </FormControl>
          </Block>
        </Row>

        <Row>
          <Block width="100%">
            <FormControl label="Address">
              <StatefulInput />
            </FormControl>
          </Block>
        </Row>

        <Row>
          <Block width="43%">
            <FormControl label="City">
              <StatefulInput />
            </FormControl>
          </Block>

          <Block width="10%">
            <FormControl label="State">
              <StatefulInput />
            </FormControl>
          </Block>

          <Block width="43%">
            <FormControl label="Zip Code">
              <StatefulInput />
            </FormControl>
          </Block>
        </Row>

        <FormControl label="Orders">
          <StatefulTextarea />
        </FormControl>

        <Button>Submit</Button>
        <CancelButton kind="secondary">Cancel</CancelButton>
      </Block>
    </ThemeProvider>
  );
}

export default CustomizingThemes;
