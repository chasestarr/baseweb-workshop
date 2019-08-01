import React from "react";
import { assetUrl } from "fusion-core";
import { Block } from "baseui/block";

import { moviesByGenre } from "./data";

function ComponentOverrides() {
  return (
    <Block display="flex" justifyContent="center">
      <img src={assetUrl("./mockup_overrides.png")} width="70%" />
    </Block>
  );
}

export default ComponentOverrides;
