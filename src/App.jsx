// styling
import "./App.css";
// common components
import { NavBar } from "./components/NavBar";
// pages
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
