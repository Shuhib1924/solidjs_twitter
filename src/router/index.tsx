import { Route, Routes } from "@solidjs/router";
import HomeScreen from "../screens/home";
import { lazy } from "solid-js";

const LoginScreen = lazy(() => import("../screens/login"));
const RegisterScreen = lazy(() => import("../screens/register"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" component={HomeScreen} />
      <Route path="/auth/login" component={LoginScreen} />
      <Route path="/auth/register" component={RegisterScreen} />
    </Routes>
  );
};

export default AppRouter;
