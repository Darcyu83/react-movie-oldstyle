import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    //
    <div>
      <h1> BookKeeper</h1>

      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/movies">Movie Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/shoes/nike">Nike</Link> | <Link to="/shoes/vans">Vans</Link>{" "}
        | <Link to="/shoes?brand=nike&brand=vans">2 brand</Link> |{" "}
        <Link to="/shoes?brand=vans">Vans1</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
