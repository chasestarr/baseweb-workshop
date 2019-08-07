// @flow
import React from "react";
import { assetUrl } from "fusion-core";
import { Block } from "baseui/block";
import { Button, SIZE } from "baseui/button";

function ComponentOverrides() {
  return (
    <Block display="flex" justifyContent="center">
      <img src={assetUrl("./flipped_button.png")} width="30%" />
    </Block>
  );
}

export default ComponentOverrides;
