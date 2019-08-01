// @flow
import React from "react";
import App from "fusion-react";
import Router from "fusion-plugin-react-router";
import Styletron from "fusion-plugin-styletron-react";

import Root from "./root.js";

export default () => {
  const app = new App(<Root />);
  app.register(Styletron);
  app.register(Router);
  return app;
};
