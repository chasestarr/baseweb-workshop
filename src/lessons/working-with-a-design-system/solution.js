import React, {useState} from "react";
import {Block} from "baseui/block";
import {Button, KIND} from "baseui/button";
import {StatefulButtonGroup} from "baseui/button-group";
import {FormControl} from "baseui/form-control";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
} from "baseui/header-navigation";
import Plus from "baseui/icon/plus";
import TriangleDown from "baseui/icon/triangle-down";
import Upload from "baseui/icon/upload";
import {StyledLink as Link} from "baseui/link";
import {StatefulMenu} from "baseui/menu";
import {Pagination} from "baseui/pagination";
import {StatefulPopover, PLACEMENT} from "baseui/popover";
import {StatefulSelect} from "baseui/select";
import {Navigation} from "baseui/side-navigation";
import {Table} from "baseui/table";

import {cities, taquerias} from "./data";

const nav = [
  {
    title: "Today's taquerias",
    itemId: "#today",
    subnav: [
      {title: "Top rated", itemId: "#top"},
      {title: "Lowest rated", itemId: "#lowest"},
      {title: "Wish list", itemId: "#wish"},
      {title: "Seen", itemId: "#seen"},
    ],
  },
  {title: "Scheduled", itemId: "#scheduled"},
  {title: "Recommended", itemId: "#recommended"},
  {title: "Taqueria history", itemId: "#history"},
];

function WorkingWithADesignSystem() {
  const [location, setLocation] = useState("#today");

  return (
    <Block>
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>Taqueria Mapper</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Link href="#">Tab Link One</Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link href="#">Tab Link Two</Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link href="#">Tab Link Three</Link>
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>

      <Block display="flex">
        <Block
          width="252px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingTop="64px"
        >
          <Button startEnhancer={Plus}>New taqueria</Button>
          <Block width="100%" paddingTop="24px">
            <Navigation
              items={nav}
              activeItemId={location}
              onChange={({item}) => setLocation(item.itemId)}
            />
          </Block>
        </Block>

        <Block width="100%">
          <Block
            display="flex"
            alignItems="center"
            height="150px"
            marginLeft="scale800"
            marginRight="scale800"
            justifyContent="space-between"
          >
            <Block display="flex">
              <Block width="300px">
                <FormControl label="City">
                  <StatefulSelect
                    options={cities.map(c => ({id: c}))}
                    labelKey="id"
                    valueKey="id"
                  />
                </FormControl>
              </Block>

              <Block width="300px" marginLeft="80px">
                <FormControl label="Time Scale">
                  <StatefulButtonGroup
                    mode="radio"
                    initialState={{selected: 0}}
                  >
                    <Button>Day</Button>
                    <Button>Week</Button>
                    <Button>Month</Button>
                  </StatefulButtonGroup>
                </FormControl>
              </Block>
            </Block>

            <Button endEnhancer={Upload}>Download</Button>
          </Block>

          <Block
            paddingLeft="scale1200"
            paddingRight="scale1200"
            height="600px"
          >
            <Table
              columns={[
                "Name",
                "Established Date",
                "My Score",
                "Overall Score",
              ]}
              data={taquerias}
            />

            <Block
              display="flex"
              justifyContent="space-between"
              paddingTop="scale800"
            >
              <StatefulPopover
                content={({close}) => (
                  <StatefulMenu
                    items={[...new Array(100)].map((_, i) => ({label: i + 1}))}
                    onItemSelect={close}
                    overrides={{
                      List: {style: {height: "150px", width: "100px"}},
                    }}
                  />
                )}
                placement={PLACEMENT.bottom}
              >
                <Button kind={KIND.tertiary} endEnhancer={TriangleDown}>
                  10 Rows
                </Button>
              </StatefulPopover>
              <Pagination currentPage={1} numPages={20} />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default WorkingWithADesignSystem;
