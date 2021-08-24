import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <HashRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tasks">
          <Tasks />
        </Route>
    </HashRouter>
  );
}

export default App;