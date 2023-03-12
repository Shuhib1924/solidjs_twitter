import { Component } from "solid-js";
import { useAuthState } from "./context/auth";

import AppRouter from "./router";
// type Glide = {
//   content: String;
// };

const App: Component = () => {
  const authState = useAuthState()!;
  return (
    <>
      <div class="text-white">
        <div>authenticated: {`${authState.isAuthenticated}`}</div>
        <div>loading: {`${authState.loading}`}</div>
      </div>
      <div id="popups" />
      <AppRouter />
    </>
  );
};

export default App;
