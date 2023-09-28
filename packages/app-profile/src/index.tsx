import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "app-shell";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/page", Page);
  app.showNotification("Hello from Piral!");
  app.registerMenu(() => (
    <a href='https://docs.piral.io' target='_blank'>
      Documentation
    </a>
  ));
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
}
