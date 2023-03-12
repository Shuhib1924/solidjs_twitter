import {
  createContext,
  onCleanup,
  onMount,
  ParentComponent,
  useContext,
} from "solid-js";

type authStateContextValues = {
  testValue: number;
  testFunction: () => string;
};

const AuthStateContext = createContext<authStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  onMount(() => {
    console.log("initial authprovider");
  });
  onCleanup(() => {
    console.log("cleanup authprovider");
  });
  return (
    <AuthStateContext.Provider
      value={{ testValue: 100, testFunction: () => "test" }}
    >
      {props.children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export default AuthProvider;
