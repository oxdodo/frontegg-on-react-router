import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FronteggProvider } from "@frontegg/react";
import App from "./App";
import { Root } from "./Root";
import { Settings } from "./Settings";

const contextOptions = {
  baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL,
  clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID, 
  appId: import.meta.env.VITE_FRONTEGG_APP_ID,
};

const routes = [
  {
    path: "/*",
    element: (
      <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
      </FronteggProvider>
    ),
    children: [
      { path: "", element: <Root /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);

