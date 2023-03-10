import {
  Component,
  createEffect,
  createSignal,
  createUniqueId,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { FaRegularImage } from "solid-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import GlidePost from "../components/glides/glidepost";
import { Glide } from "../types/glide";

// type Glide = {
//   content: String;
// };

// const HelloWorld = () => {
//   onMount(() => {
//     console.log("initialized");
//   });

//   onCleanup(() => {
//     console.log("clean up");
//   });
//   return <div>hello</div>;
// };

// const GoodBye = () => {
//   onMount(() => {
//     console.log("g init");
//   });
//   onCleanup(() => {
//     console.log("g clean");
//   });
//   return <div>goodbye</div>;
// };

const HomeScreen: Component = () => {
  const [content, setContent] = createSignal("");
  const [glides, setGlides] = createSignal<Glide[]>([]);
  // const [displayContent, setDisplayContent] = createSignal(false);

  // onMount(() => {
  //   console.log("mount");
  // });

  // createEffect(() => {
  //   if (glides().length > 3) {
  //     alert("3 glied are added");
  //   }
  //   // console.log(glides().length);
  // });
  const createGlide = () => {
    const glide = {
      id: createUniqueId(),
      content: content(),
      user: {
        nickName: "shuhib",
        avatar:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
      },
      likesCount: 0,
      subglidesCount: 0,
      date: new Date(),
    };
    setGlides([glide, ...glides()]);
    setContent("");
    console.log(JSON.stringify(glides()));
  };

  onMount(() => {
    console.log("mounting");
  });
  onCleanup(() => {
    console.log("cleaning");
  });

  return (
    <MainLayout>
      {/* HOME PAGE START */}
      <div class="flex-it py-1 px-4 flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
            ></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex-it flex-grow">
          <div class="flex-it">
            <textarea
              value={content()}
              onInput={(event) => {
                setContent(event.currentTarget.value);
                // console.log(event.currentTarget.value);
              }}
              name="content"
              rows="1"
              id="glide"
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
              placeholder={"What's new?"}
            />
          </div>
          <div class="flex-it mb-1 flex-row xs:justify-between items-center">
            <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="flex-it w-32 mt-3 cursor-pointer">
              <button
                onclick={createGlide}
                type="button"
                class="
                            disabled:cursor-not-allowed disabled:bg-gray-400
                            bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
              >
                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                  <span>Glide It</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* {content()} */}
        {/* MESSENGER END */}
      </div>
      <div class="h-px bg-gray-700 my-1" />
      <For each={glides()}>
        {(glide) => (
          <GlidePost glide={glide} />
          // <div>
          //   <div>{glide.content}</div>
          //   <div>{glide.user.nickName}</div>
          // </div>
        )}
      </For>
      {/* <button onclick={() => setDisplayContent(!displayContent())}>
        toggle
      </button>
      <Show when={displayContent()} fallback={<GoodBye />}>
        <HelloWorld />
      </Show> */}
      {/* HOME PAGE END */}
    </MainLayout>
  );
};

export default HomeScreen;
