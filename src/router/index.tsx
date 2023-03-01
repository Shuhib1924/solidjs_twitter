import { Route, Routes } from "@solidjs/router";
import HomeScreen from "../screens/home";
import { lazy } from "solid-js";

const LoginScreen = lazy(() => import("../screens/login"));
const RegisterScreen = lazy(() => import("../screens/register"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Routes>
  );
};

export default AppRouter;
