import React from "react";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Button } from "baseui/button";

import { Card } from "baseui/card";

import { artworks } from "./data.js";

function truncate(str, max = 50) {
  if (str.length > max) {
    return str.substring(0, max) + "...";
  }
  return str;
}

// Right now the artwork information looks flat and complicated. Let's think about how to arrange
// text so that displays the information usefully; where the most important details stand out.
// You may want to look at https://baseweb.design/components/typography/
// Also, how can we best position and style the action buttons on the bottom of each card?
export default function Hierarchy() {
  const [css, theme] = useStyletron();
  return (
    <Block margin="scale800" width="800px">
      {artworks.map(artwork => (
        <div
          className={css({
            display: "flex",
            boxShadow: theme.lighting.shadow400,
            marginBottom: theme.sizing.scale300
          })}
        >
          <Block width="200px" height="200px" overflow="hidden">
            <Block
              $as="img"
              src={artwork.webImage.url}
              height="200px"
              minWidth="100%"
            />
          </Block>
          <Block marginLeft="scale300" font="font200">
            <Block>Title: {truncate(artwork.title)}</Block>
            <Block maxWidth="460px">
              Description: {truncate(artwork.plaqueDescriptionEnglish, 120)}
            </Block>
            <Block>Artist: {artwork.principalMaker}</Block>
            <Block>Date: {artwork.dating.presentingDate}</Block>
            <Block>
              Dimensions:
              {artwork.dimensions.map(d => `${d.value} ${d.unit}`).join(" ")}
            </Block>

            <Block display="flex">
              <Button size="compact">Delete</Button>
              <Button size="compact">Edit</Button>
              <Button size="compact">Publish</Button>
            </Block>
          </Block>
        </div>
      ))}
    </Block>
  );
}
