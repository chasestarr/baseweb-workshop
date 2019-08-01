// @flow
import React from "react";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Button, SIZE } from "baseui/button";
import { StatefulButtonGroup } from "baseui/button-group";
import { Table } from "baseui/table";

// Often when launching a new product, there will be limited information available until people
// start using it. This doesn't look great, and diverts users from using the tool. How could we
// make the empty state more inviting?
export default function EmptyState() {
  const [css, theme] = useStyletron();
  return (
    <Block display="flex">
      <div
        className={css({
          backgroundColor: theme.colors.mono300,
          width: "300px",
          height: "95vh"
        })}
      />
      <div
        className={css({
          marginTop: theme.sizing.scale800,
          marginLeft: theme.sizing.scale1200,
          marginRight: theme.sizing.scale1200,
          width: "100%"
        })}
      >
        <Block
          display="flex"
          justifyContent="space-between"
          marginBottom="scale300"
        >
          <StatefulButtonGroup mode="radio" initialState={{ selected: 0 }}>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Expired</Button>
          </StatefulButtonGroup>
          <Button>Create Item</Button>
        </Block>

        <Block height="500px">
          <Table columns={["one", "two", "three", "four"]} data={[]} />
        </Block>
      </div>
    </Block>
  );
}
