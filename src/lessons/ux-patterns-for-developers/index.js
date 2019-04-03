import React from "react";
import {Block} from "baseui/block";

import EmptyState from "./empty-state.js";
import Hierarchy from "./hierarchy.js";

// uncomment the components below to display them on the page
function UXPatternsForDevelopers() {
  return (
    <>
      <Block display="flex" justifyContent="center" font="font500">
        UX Patterns for Developers
      </Block>
      {/* <EmptyState /> */}
      {/* <Hierarchy /> */}
    </>
  );
}

export default UXPatternsForDevelopers;
