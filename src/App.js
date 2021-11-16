import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import css from "./App.module.css";

function App() {
  return (
    //
    <div>
      <h1> Menu </h1>

      <nav className={css.navShadow}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "",
            };
          }}
          to="/movies"
        >
          Movie Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "",
            };
          }}
          to="/invoices"
        >
          Invoices
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "",
            };
          }}
          to="/expenses"
        >
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
