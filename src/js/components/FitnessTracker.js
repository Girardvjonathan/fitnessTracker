import React from "react";
import { connect } from "react-redux"
// import {  } from "../actions/FitnessTrackerActions"

@connect((store) => {
  return {
  };
})
export default class FitnessTracker extends React.Component {

  componentWillMount() {
    // this.props.dispatch()
  }


  render() {

    return (
      <div>
        <h2>Hi, Welcome to our website</h2>
      </div>
      );
  }
}
