import React, { useState } from "react";
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
// but how to we perform more nuanced styling? (pseudo-selectors/media queries)
function DynamicStyling() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Example>
      <Title>Dynamic Styling</Title>
      <button
        style={{
          color: isActive ? "#fff" : "#000",
          background: isActive ? "#276ef1" : "none"
        }}
        onClick={() => setIsActive(!isActive)}
      >
        It is {isActive ? "on" : "off"}!
      </button>
    </Example>
  );
}

// Refactor the DynamicStyling example to use the 'useStyletron' hook.
function StyledComponent() {
  const [css] = useStyletron();
  const [isActive, setIsActive] = useState(false);
  return (
    <Example>
      <Title>Styled Component</Title>
      <button
        className={css({
          color: isActive ? "#fff" : "#000",
          background: isActive ? "#276ef1" : "none",
          ":hover": {
            background: isActive ? "green" : "yellow"
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

  const Button = ({ groupIndex, children }) => {
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
  const [isHovered, setIsHovered] = useState(false);
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
        <div className={css({ fontColor: isHovered ? "blue" : "green" })}>
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
