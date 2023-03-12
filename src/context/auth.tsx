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
import { createStore } from "solid-js/store";

type authStateContextValues = {
  //   testValue: number;
  //   testFunction: () => string;
  isAuthenticated: boolean;
  loading: boolean;
  //   setIsAuthenticated: Setter<boolean>;
  //   setLoading: Setter<boolean>;
};

const AuthStateContext = createContext<authStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  //   onMount(() => {
  //     console.log("initial authprovider");
  //   });
  //   onCleanup(() => {
  //     console.log("cleanup authprovider");
  //   });
  //   const [isAuthenticated, setIsAuthenticated] = createSignal(false);
  //   const [loading, setLoading] = createSignal(true);
  const initialState = () => ({
    isAuthenticated: true,
    loading: false,
  });
  const [store, setStore] = createStore(initialState());
  onMount(() => {
    setStore("isAuthenticated", false);
    setStore("loading", true);
  });
  return (
    <AuthStateContext.Provider
      value={
        //     {
        //     // testValue: 100,
        //     // testFunction: () => "test",
        //     // isAuthenticated,
        //     // loading,
        //     // setLoading,
        //     // setIsAuthenticated,
        //   }
        store
      }
    >
      {props.children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export default AuthProvider;
