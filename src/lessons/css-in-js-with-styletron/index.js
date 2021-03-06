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
  return (
    <Example>
      <Title>Styled Component</Title>
    </Example>
  );
}

// Create an example where a parent component applies styles to its children.
function ChildSelector() {
  return (
    <Example>
      <Title>Child Selectors</Title>
    </Example>
  );
}

// Create an example where hovering a parent component changes styles of a child.
function DescendentHover() {
  return (
    <Example>
      <Title>Descendent Selectors</Title>
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
