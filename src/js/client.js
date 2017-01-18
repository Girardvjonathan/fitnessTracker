import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout"
import store from "./store"
import About from "./components/About";
import FitnessTracker from "./components/FitnessTracker";
import Login from "./components/Login";
import ActivityTable from "./components/ActivityTable";

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <div>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={FitnessTracker}></IndexRoute>
      <IndexRoute component={Login}></IndexRoute>
      {/* <Route path="archives(/:article)" name="archives" component={Archives}></Route> */}
      <Route path="/activity" component={ActivityTable}></Route>
      <Route path="/about" name="about" component={About}></Route>
    </Route>
  </Router>
  </div>
</Provider>, app);
