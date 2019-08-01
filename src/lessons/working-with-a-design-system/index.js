// @flow
import React, { useState } from "react";
import { assetUrl } from "fusion-core";
import { Block } from "baseui/block";

import { cities, taquerias } from "./data";

function WorkingWithADesignSystem() {
  return (
    <Block display="flex" justifyContent="center">
      <img src={assetUrl("./mockup_system.png")} width="100%" />
    </Block>
  );
}

export default WorkingWithADesignSystem;
