import "./styles/base/base.css";
import "./styles/index.css";
import { Header } from "./components/homepage/Header";
import { Router } from "./components/routes/Router";

function App() {
  return (
    <div className="App">
    <Header/>
    <Router/>
   </div>
  );
}

export default App;