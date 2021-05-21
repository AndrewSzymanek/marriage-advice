import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar/navbar.js";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home.js";
import Submit from "./components/Submit/submit.js";
import List from "./components/List/list.js";
import Footer from "./components/Footer/footer.js";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/submit" component={Submit} />
        <Route path="/list" component={List} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
