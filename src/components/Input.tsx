import type { Component, JSX, Setter } from "solid-js";
import { useDebounce } from "../hooks/useDebounce";
interface IPrps {
  children?: JSX.Element;
  handleChange: Setter<string>;
}
const Input: Component<IPrps> = ({ handleChange }) => {
  const enhanceHandleChange = useDebounce(handleChange, 500);
  return (
    <input
      class=" mt-8 w-1/2 border mt-1 block border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 px-3 py-2 bg-white  focus:outline-none"
      placeholder="generate your avatar"
      onInput={(e) => {
        enhanceHandleChange((e.target as HTMLInputElement).value);
      }}
    >
      Generate Avatar
    </input>
  );
};

export default Input;
