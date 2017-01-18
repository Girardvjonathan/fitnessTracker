import React from "react";
import { Link } from "react-router";

import Footer from "./layout/Footer";
import Nav from "./layout/Nav";


export default class Layout extends React.Component {

  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>FitnessTracker</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
