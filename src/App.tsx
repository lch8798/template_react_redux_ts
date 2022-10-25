import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "~/store";
import Home from "@pages/Home";
import About from "@pages/About";
import Nav from "@components/Nav";

export const PAGES: { label: string; path: string; Cmp: () => JSX.Element }[] =
  [
    {
      label: "Home",
      path: "/",
      Cmp: Home,
    },
    {
      label: "About",
      path: "/about",
      Cmp: About,
    },
  ];

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            {PAGES.map((p) => (
              <Route key={p.label} path={p.path} element={<p.Cmp />} />
            ))}
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
