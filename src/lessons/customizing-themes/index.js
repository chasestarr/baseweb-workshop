import React from "react";
import { Block } from "baseui/block";
import { assetUrl } from "fusion-core";

// purple color scale:
// "#F0EEFE"
// "#D9D4FC"
// "#ACA0F9"
// "#705BF4"
// "#4327F1"
// "#331EB7"
// "#281791"
// "#1B1060"

function CustomizingThemes() {
  return (
    <Block display="flex" justifyContent="center">
      <img src={assetUrl("./mockup_themes.png")} width="60%" />
    </Block>
  );
}

export default CustomizingThemes;
