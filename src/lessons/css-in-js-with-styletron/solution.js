import React, {useState} from "react";
import {Block} from "baseui/block";
import {styled} from "styletron-react";

const Example = styled("div", {marginTop: "24px"});
const Title = styled("div", {fontSize: "1em"});

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
          background: isActive ? "#276ef1" : "none",
        }}
        onClick={() => setIsActive(!isActive)}
      >
        It is {isActive ? "on" : "off"}!
      </button>
    </Example>
  );
}

// Refactor the DynamicStyling example to use the styletron-react 'styled' function.
function StyledComponent() {
  const Button = styled("button", props => {
    return {
      color: props.$isActive ? "#fff" : "#000",
      background: props.$isActive ? "#276ef1" : "none",
      ":hover": {
        background: props.$isActive ? "green" : "yellow",
      },
    };
  });

  const [isActive, setIsActive] = useState(false);
  return (
    <Example>
      <Title>Styled Component</Title>
      <Button $isActive={isActive} onClick={() => setIsActive(!isActive)}>
        It is {isActive ? "on" : "off"}!
      </Button>
    </Example>
  );
}

// Create an example where a parent component applies styles to its children.
function ChildSelector() {
  const ButtonGroup = ({children}) => {
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {groupIndex: index}),
    );
  };

  const Button = ({groupIndex, children}) => {
    const Btn = styled("button", props => ({
      margin: props.$isGrouped ? "0px" : "0 2em 0 0",
    }));
    return (
      <Btn $isGrouped={typeof groupIndex !== "undefined"}>
        {children} {groupIndex}
      </Btn>
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

  const Parent = styled("div", {
    width: "300px",
    padding: "4px",
    backgroundColor: "lightgrey",
  });
  const Child = styled("p", props => ({
    fontColor: props.$isHovered ? "blue" : "green",
  }));

  return (
    <Example>
      <Title>Descendent Selectors</Title>

      <Parent
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Child>{isHovered ? "hovered" : "not hovered"}</Child>
      </Parent>
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
