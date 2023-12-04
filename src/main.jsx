import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.scss";
import "./styles/input.css";
import { SkeletonTheme } from "react-loading-skeleton";
const root = document.documentElement;
const baseColor = getComputedStyle(root).getPropertyValue("--bg-color");
const highlightColor =
  getComputedStyle(root).getPropertyValue("--element-color");

console.log(baseColor, highlightColor);
ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SkeletonTheme>
);
