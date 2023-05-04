import type { Component } from "solid-js";
import Header from "./components/Header";
import Center from "./components/Center";
const App: Component = () => {
  return (
    <div>
      <Header />
      <main class="w-2/5 mx-auto">
        <Center />
      </main>
    </div>
  );
};

export default App;
