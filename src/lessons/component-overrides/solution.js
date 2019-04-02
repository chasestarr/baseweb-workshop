import React from "react";
import {Block} from "baseui/block";
import {StatefulMenu, NestedMenus, StyledListItem} from "baseui/menu";
import {StarRating} from "baseui/rating";

import {moviesByGenre} from "./data";

const MyOption = props => {
  return (
    <StyledListItem {...props}>
      <Block display="flex">
        <Block height="80px" $as="img" src={props.item.Poster} />
        <Block marginLeft="scale300">
          <Block font="font500">{props.item.Title}</Block>
          <Block $as="span" font="font450">
            {props.item.Director}
          </Block>
          <Block $as="span" font="font400" marginLeft="scale200">
            {props.item.Year}
          </Block>
          <Block>
            <StarRating value={Math.round(Number(props.item.imdbRating) / 2)} />
          </Block>
        </Block>
      </Block>
    </StyledListItem>
  );
};

function ComponentOverrides() {
  return (
    <div>
      <Block display="flex" justifyContent="center" font="font500">
        Component Overrides
      </Block>

      <NestedMenus>
        <StatefulMenu
          items={Object.keys(moviesByGenre).map(genre => ({
            label: genre,
          }))}
          overrides={{
            List: {style: {width: "350px", overflow: "auto"}},
            Option: {
              props: {
                getChildMenu: item => {
                  return (
                    <StatefulMenu
                      onItemSelect={({item}) =>
                        window.open(item.Website, "_blank")
                      }
                      items={moviesByGenre[item.label].map(movie => ({
                        label: movie.Title,
                        ...movie,
                      }))}
                      overrides={{
                        Option: {component: MyOption},
                        List: {style: {maxHeight: "350px", overflow: "auto"}},
                      }}
                    />
                  );
                },
              },
            },
          }}
        />
      </NestedMenus>
    </div>
  );
}

export default ComponentOverrides;
