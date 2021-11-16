import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./components/Invoices";
import Expenses from "./components/Expenses";
import About from "./routes/About";
import Movies from "./routes/Movies";
import Invoice from "./components/Invoice";
import Shoes from "./components/Shoes";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="about" element={<About />}>
            <Route path=":movieId&:movieId2" element={<About />}></Route>
          </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            ></Route>
            <Route path=":number" element={<Invoice />}></Route>
          </Route>
          <Route path="expenses" element={<Expenses />}></Route>
        </Route>
        <Route
          path="*"
          element={<h1 style={{ color: "Red" }}>No Matched URL</h1>}
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
