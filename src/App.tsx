import { Component } from "solid-js";

import AppRouter from "./router";
// type Glide = {
//   content: String;
// };

const App: Component = () => {
  return (
    <>
      <div id="popups" />
      <AppRouter />
    </>
  );
};

export default App;
