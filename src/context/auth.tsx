import {
  Accessor,
  createContext,
  createSignal,
  onCleanup,
  onMount,
  ParentComponent,
  Setter,
  useContext,
} from "solid-js";

type authStateContextValues = {
  //   testValue: number;
  //   testFunction: () => string;
  isAuthenticated: Accessor<boolean>;
  loading: Accessor<boolean>;
  setIsAuthenticated: Setter<boolean>;
  setLoading: Setter<boolean>;
};

const AuthStateContext = createContext<authStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  //   onMount(() => {
  //     console.log("initial authprovider");
  //   });
  //   onCleanup(() => {
  //     console.log("cleanup authprovider");
  //   });
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);
  const [loading, setLoading] = createSignal(true);
  return (
    <AuthStateContext.Provider
      value={{
        // testValue: 100,
        // testFunction: () => "test",
        isAuthenticated,
        loading,
        setLoading,
        setIsAuthenticated,
      }}
    >
      {props.children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export default AuthProvider;
