import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import SchedulesList from "./pages/SchedulesList";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/schedule-now">
            <Schedule />
          </Route>
          <Route path="/schedules-list">
            <SchedulesList />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
          
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
