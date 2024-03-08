import AdvantagesPage from "./ui/AdvantagesPage/AdvantagesPage";
import Header from "./ui/Header/Header";
import Slider from "./ui/Slider/Slider";
import Store from "./ui/Store/Store";
import About from "./ui/About/About"
import Contact from "./ui/Contact/Contact"
import { useState } from "react";

function App() {
  const state = useState(0)
  return (
    <div className="container">
      <Header state={state} />
      <Slider />
      <AdvantagesPage state={state} />
      <Store state={state} />
      <About state={state} />
      <Contact />
    </div>
  );
}

export default App;