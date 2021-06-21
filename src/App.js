import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Messages from "./pages/Message"

import { Loader } from "./components"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/message">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
