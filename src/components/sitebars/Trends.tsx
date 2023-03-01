import { Component } from "solid-js";
import { For } from "solid-js";

const randomize = () => Math.floor(Math.random() * 500);

const trends = [
  {
    category: "Sports",
    content: "somebody import wons!",
    glideCount: randomize(),
  },
  {
    category: "Finance",
    content: "bitcount down!",
    glideCount: randomize(),
  },
  {
    category: "global",
    content: "turkey and syria!",
    glideCount: randomize(),
  },
  {
    category: "europe",
    content: "hassib joins proudly the internal circle of LGBTQ!",
    glideCount: randomize(),
  },
  {
    category: "Games",
    content: "super mario is available right now!",
    glideCount: randomize(),
  },
  {
    category: "Technology",
    content: "JS sucks!",
    glideCount: randomize(),
  },
];

const TrendSidebar: Component = () => {
  return (
    <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
      <div class="flex-it p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>
      <For each={trends}>
        {(index) => {
          return (
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
              <div class="flex-it">
                <span class="text-gray-400 text-sm">{index.content}</span>
                <span class="text-lg font-bold">{index.category}</span>
                <span class="text-gray-400 text-sm">
                  {index.glideCount} glides
                </span>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default TrendSidebar;
