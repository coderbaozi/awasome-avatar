import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Avatar from "./Avatar";
import Input from "./Input";
import { Icon } from "@iconify-icon/solid";

const Center: Component = () => {
  const [name, setName] = createSignal<string>("包子");
  return (
    <>
      <div class="flex text-xl flex-col items-center shadow-md justify-center bg-light-200  p-4">
        <Avatar name={name} />
        <div class="flex space-x-4">
          <div class="cursor-pointer hover:bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-100 flex p-4 rounded-full bg-slate-100  text-black">
            <Icon icon="ic:round-refresh" />
          </div>
          <button class="flex items-center transition hover:bg-gradient-to-r from-green-400 to-blue-200 inline-block rounded-3xl bg-slate-100 px-8 py-3 text-sm font-medium text-black">
            <Icon class="text-xl" icon="material-symbols:download" />
            Export PNG
          </button>
          <button class="flex items-center hover:bg-gradient-to-r from-green-400 to-blue-50 inline-block rounded-3xl bg-slate-100 px-8 py-3 text-sm font-medium text-black">
            <Icon class="text-xl" icon="material-symbols:download" />
            Export SVG
          </button>
        </div>
        <Input handleChange={setName} />
      </div>
    </>
  );
};

export default Center;
