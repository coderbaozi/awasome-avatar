import { Component, createEffect, onMount } from "solid-js";
import { Accessor } from "solid-js";
interface IProps {
  name: Accessor<string>;
}
const Avatar: Component<IProps> = ({ name }) => {
  let canvas: HTMLCanvasElement = {} as HTMLCanvasElement;
  createEffect(() => {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.font = "36px Helvetica Neue";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // substring is [ )
      ctx.fillText(name().substring(0, 2), canvas.width / 2, canvas.height / 2);
    }
  });

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
