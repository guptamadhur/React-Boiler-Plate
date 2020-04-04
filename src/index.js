import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hi React</p>;
}

render(<Hi />, document.getElementById("app"));
