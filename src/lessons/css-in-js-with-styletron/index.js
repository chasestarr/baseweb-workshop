// @flow
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
// but how do we perform more nuanced styling? (pseudo-selectors/media queries)
// refactor this to use useStyletron API and set hover background color to #B4540B
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

// Now use the theme values instead of hard-coding hex color values
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
