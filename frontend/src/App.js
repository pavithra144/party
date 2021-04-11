import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/layouts/NavBar";
import { Home } from "./components/pages/Home";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import GuestState from "./context/guestContext/GuestState";
import AuthState from "./context/authContext/AuthState";
import PrivateRoute from "./components/pages/routes/PrivateRoute"
import setToken from "./utils/SetToken"

if(localStorage.token) {
  setToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <PrivateRoute exact path="/" component={Home}></PrivateRoute>
              <Route exact path="/register" component={RegisterPage}></Route>
              <Route exact path="/login" component={LoginPage}></Route>
            </Switch>
          </div>
        </Router>
      </GuestState>
    </AuthState>
  );
}

export default App;
