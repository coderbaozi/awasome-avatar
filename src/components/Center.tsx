import { Component, onMount } from "solid-js";
import { createSignal, Show } from "solid-js";
import Avatar from "./Avatar";
import Input from "./Input";
import { Icon } from "@iconify-icon/solid";

const Center: Component = () => {
  const [name, setName] = createSignal<string>("♻️");
  const [show, setShow] = createSignal<boolean>(false);
  const [color, setColor] = createSignal<string>();
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement>(
    {} as HTMLCanvasElement
  );
  let picker: HTMLInputElement = {} as HTMLInputElement;

  const autoOpenPicker = () => {
    picker.click();
  };

  const handleRecovery = () => {
    window.location.reload();
  };

  const downloadCanvas = (blob: Blob, fileName: string) => {
    const a = document.createElement("a");
    a.style.display = "none";
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
  };

  return (
    <>
      <div class="flex text-xl flex-col items-center shadow-md justify-center bg-light-200  p-4">
        <Avatar setCanvas={setCanvas} color={color} name={name} />
        <div class="flex space-x-4">
          <div
            onClick={handleRecovery}
            class="cursor-pointer hover:bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-100 flex p-4 rounded-full bg-slate-100  text-black"
          >
            <Icon icon="ic:round-refresh" />
          </div>
          <button
            onClick={() => {
              canvas().toBlob((blob) => {
                if (blob !== null) {
                  downloadCanvas(blob, "avatar");
                }
              });
            }}
            class="flex items-center transition hover:bg-gradient-to-r from-green-400 to-blue-200 inline-block rounded-3xl bg-slate-100 px-8 py-3 text-sm font-medium text-black"
          >
            <Icon class="text-xl" icon="material-symbols:download" />
            Export PNG
          </button>
          <button class="flex items-center hover:bg-gradient-to-r from-green-400 to-blue-50 inline-block rounded-3xl bg-slate-100 px-8 py-3 text-sm font-medium text-black">
            <Icon class="text-xl" icon="material-symbols:download" />
            Export SVG(Wait)
          </button>
          <div
            onClick={() => {
              setShow((show) => !show);
              autoOpenPicker();
            }}
            class="relative cursor-pointer hover:bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-100 flex p-4 rounded-full bg-slate-100  text-blac"
          >
            <Icon icon="ic:outline-color-lens" />
            <Show when={show()} fallback={() => <></>}>
              <input
                onChange={() => {
                  setColor(picker.value);
                }}
                ref={picker}
                class="hidden absolute -top-8 -right-14"
                type="color"
                value="#fffaaa"
              />
            </Show>
          </div>
        </div>
        <Input handleChange={setName} />
      </div>
    </>
  );
};

export default Center;
