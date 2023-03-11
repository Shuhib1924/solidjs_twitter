import { onCleanup, onMount, createRoot, createSignal } from "solid-js";

const getClientSize = () => ({
  height: document.body.clientHeight,
  width: document.body.clientWidth,
});
const pageSize = () => {
  const [value, setValue] = createSignal(getClientSize());
  onMount(() => {
    console.log("onMount pagesize");
    window.addEventListener("resize", handleResize);
  });
  const handleResize = () => {
    setValue(getClientSize());
    console.log(value());
  };
  //   onCleanup(() => {
  //     console.log("onCleanUp pagesize");
  //   });
  return value;
};

export default createRoot(pageSize);
