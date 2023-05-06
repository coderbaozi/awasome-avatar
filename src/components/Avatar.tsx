import { Component, Setter, createEffect, onMount } from "solid-js";
import { Accessor } from "solid-js";
interface IProps {
  name: Accessor<string>;
  color: Accessor<string | undefined>;
  setCanvas: Setter<HTMLCanvasElement>;
}
const Avatar: Component<IProps> = ({ name, color, setCanvas }) => {
  let dpr = window.devicePixelRatio;
  let first = true;
  let canvas: HTMLCanvasElement = {} as HTMLCanvasElement;
  createEffect(() => {
    setCanvas(canvas);
    const ctx = canvas.getContext("2d");
    if (first) {
      fixDistortion();
      first = !first;
    }
    if (ctx) {
      ctx.fillStyle = (color() === undefined ? "#fff" : color()) as string;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.font = "36px Helvetica Neue";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // substring is [ )
      ctx.fillText(name().substring(0, 2), canvas.width / 3, canvas.height / 3);
    }
  });
  function fixDistortion() {
    let { width: cssWidth, height: cssHeight } = canvas.getBoundingClientRect();
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
    canvas.width = dpr * cssWidth;
    canvas.height = dpr * cssHeight;
    canvas.getContext("2d")?.scale(dpr, dpr);
  }
  return (
    <div class="mb-4 p-4">
      <canvas
        ref={canvas}
        class="border font-mono rounded-lg border-gray-400"
        width={90}
        height={90}
      ></canvas>
    </div>
  );
};

export default Avatar;
