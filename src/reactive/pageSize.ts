import { onCleanup, onMount, createRoot } from "solid-js";

const pageSize = () => {
  onMount(() => {
    console.log("onMount pagesize");
  });
  onCleanup(() => {
    console.log("onCleanUp pagesize");
  });
  return 100;
};

export default createRoot(pageSize);
