import AdvantagesPage from "./ui/AdvantagesPage/AdvantagesPage";
import Header from "./ui/Header/Header";
import Slider from "./ui/Slider/Slider";
import Store from "./ui/Store/Store";
import About from "./ui/About/About"
import Contact from "./ui/Contact/Contact"

function App() {
  return (
    <div className="container">
      <Header/>
      <Slider/> 
      <AdvantagesPage/>
      <Store/>
      <About/>
      <Contact />
    </div>
  );
}

export default App;