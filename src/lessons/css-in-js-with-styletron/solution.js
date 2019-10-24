// @flow
import * as React from "react";
import { Block } from "baseui/block";
import { useStyletron } from "baseui";

const Example = ({ children }) => {
  const [css] = useStyletron();
  return <div className={css({ marginTop: "24px" })}>{children}</div>;
};

const Title = ({ children }) => {
  const [css] = useStyletron();
  return <div className={css({ fontSize: "1em" })}>{children}</div>;
};

// Encapsulates the styles so that we can copy/paste this code without worry
// but how do we perform more nuanced styling? (pseudo-selectors/media queries)
// refactor this to use useStyletron API and set hover background color to #B4540B
function DynamicStyling() {
  const [isActive, setIsActive] = React.useState(false);
  const [css] = useStyletron();

  return (
    <Example>
      <Title>Dynamic Styling</Title>
      <button
        className={css({
          color: isActive ? "#FFF" : "#000",
          background: isActive ? "#276EF1" : "none",
          ":hover": {
            background: "#B4540B"
          }
        })}
        onClick={() => setIsActive(!isActive)}
      >
        It is {isActive ? "on" : "off"}!
      </button>
    </Example>
  );
}

// Now use the theme values instead of hard-coding hex color values
function StyledComponent() {
  const [css, theme] = useStyletron();
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Example>
      <Title>Styled Component</Title>
      <button
        className={css({
          color: isActive ? theme.colors.mono100 : theme.colors.mono1000,
          background: isActive ? theme.colors.primary : "none",
          ":hover": {
            background: theme.colors.warning500
          }
        })}
        onClick={() => setIsActive(!isActive)}
      >
        It is {isActive ? "on" : "off"}!
      </button>
    </Example>
  );
}

// Create an example where a parent component applies styles to its children.
function ChildSelector() {
  const ButtonGroup = ({ children }) => {
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, { groupIndex: index })
    );
  };

  const Button: React.StatelessFunctionalComponent<{
    groupIndex?: number,
    children: React.Node
  }> = ({ groupIndex, children }) => {
    const [css] = useStyletron();
    return (
      <button
        className={css({
          margin: typeof groupIndex !== "undefined" ? "0px" : "0 2em 0 0"
        })}
      >
        {children} {groupIndex}
      </button>
    );
  };

  return (
    <Example>
      <Title>Child Selectors</Title>
      <p>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </p>
      <p>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </p>
    </Example>
  );
}

// Create an example where hovering a parent component changes styles of a child.
function DescendentHover() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [css] = useStyletron();
  return (
    <Example>
      <Title>Descendent Selectors</Title>
      <div
        className={css({
          width: "300px",
          padding: "4px",
          backgroundColor: "lightgrey"
        })}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={css({ color: isHovered ? "blue" : "green" })}>
          {isHovered ? "hovered" : "not hovered"}
        </div>
      </div>
    </Example>
  );
}

function CSSInJSWithStyletron() {
  return (
    <>
      <Block display="flex" justifyContent="center" font="font500">
        CSS in JS with Styletron
      </Block>

      <Block margin="scale800">
        <DynamicStyling />
        <StyledComponent />
        <ChildSelector />
        <DescendentHover />
      </Block>
    </>
  );
}

export default CSSInJSWithStyletron;
