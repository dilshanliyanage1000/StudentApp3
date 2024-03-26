import React from "react";
import { createRoot } from "react-dom";
import Navbar from "./components/Navbar";

import 'bootstrap/dist/css/bootstrap.css';

import AddStudent from "StudentApp1/AddStudent"
import("StudentApp1/AppCSS");

const App = () => (
  <>
    <Navbar />
    <AddStudent />
  </>
);

const root = createRoot(document.getElementById("app"));

root.render(<App />);
