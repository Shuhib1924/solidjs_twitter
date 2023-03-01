import { Component, createSignal, Show } from "solid-js";

const Popup: Component = () => {
  const [isOpen, setIsOpen] = createSignal();
  return (
    <div class="relative">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open me
      </button>
      <Show when={isOpen()}>
        <div class="flex-it w-20 h-20 fixed bg-black bottom-10 popup">
          hello world
        </div>
      </Show>
    </div>
  );
};

export default Popup;
