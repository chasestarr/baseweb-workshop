// @flow
import React from "react";
import { Block } from "baseui/block";
import { Button, SIZE } from "baseui/button";

function ComponentOverrides() {
  return (
    <Block display="flex" justifyContent="center">
      <Button
        overrides={{
          BaseButton: {
            style: ({ $size }) => {
              console.log($size);
              return {
                transform: $size === SIZE.large ? "scale(-1, 1)" : null
              };
            }
          }
        }}
        size={SIZE.large}
      >
        Some Text
      </Button>
    </Block>
  );
}

export default ComponentOverrides;
