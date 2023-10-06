import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "@package/app-shell";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/page", Page);
  app.showNotification("Hello from Piral!");
  app.registerMenu(() => <Link to='/page'>Profile</Link>);
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
}
