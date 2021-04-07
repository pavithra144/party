import "./App.css";
import { NavBar } from "./components/layouts/NavBar";
import { Home } from "./components/pages/Home";
import GuestState from "./context/guestContext/GuestState";

function App() {
  return (
    <GuestState>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </GuestState>
  );
}

export default App;
