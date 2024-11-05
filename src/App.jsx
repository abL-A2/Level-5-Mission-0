// styling
import "./App.css";
// common components
import { NavBar } from "./components/NavBar";
// pages
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
