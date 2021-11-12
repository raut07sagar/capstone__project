import Navbar from "./Componants/navbar/Navbar"
import './App.css';
import Body from "./Componants/body/Body"
import "react-toggle/style.css";
import Tab from "./Componants/TabComponent/Tab"
import Body2 from "./Componants/Body2/Body2"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Tab />
      <Body />
      <Body2 />
    </div>
  );
}

export default App;
