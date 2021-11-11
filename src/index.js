import React from "react";
import AnimatedCursor from "react-animated-cursor"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './fonts/urial/URIAL.otf';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


//Scroll Horizontal

if (window.innerWidth > 1024) {
function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener("wheel", transformScroll);
}