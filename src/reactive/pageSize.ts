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
  const isXL = () => value().width > 800;
  const isLG = () => value().width > 500;
  return { isLG, isXL, value };
};

export default createRoot(pageSize);
