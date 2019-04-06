import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import "materialize-css/dist/css/materialize.min.css";

import { prepareData } from "./calculations/dataPrep";
import calculateRegression from "./calculations/regression";
import calcNNR from "./calculations/nnRegression";
import Plot from "./components/Plot";
import ControlPanel from "./components/ControlPanel";



calcNNR();

class RegressionGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regression: false,
      age: ""
    };
    this.renderRegression = this.renderRegression.bind(this);
    this.switchAge = this.switchAge.bind(this);
  }

  switchAge = arg => {
    this.setState({ age: arg });
  };

  renderRegression = () => {
    if (this.state.regression) {
      this.setState({ regression: false });
    } else {
      this.setState({ regression: true });
    }
  };

  renderRegressionInfo = () => {
    if (this.state.regression) {
      return calculateRegression(prepareData(this.state.age)).gradient;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <header key="1_header">
          <h5 className="center-align">Diseases in India over time</h5>
        </header>,
        <main className="row" key="2_main">
          <div className="col m8 s12">
            <Plot
              regression={this.state.regression}
              data={prepareData(this.state.age)}
            />
          </div>
          <div className="col m4 s12">
            <ControlPanel
              switchAge={arg => this.switchAge(arg)}
              calcRegression={this.renderRegression}
            />
            {this.state.regression ? (
              <div>
                <h3>
                  Prediction for 2020:{" "}
                  {
                    calculateRegression(prepareData(this.state.age))
                      .prediction[1]
                  }
                </h3>
                <h5>
                  Gradient for the curve:{" "}
                  {calculateRegression(prepareData(this.state.age)).gradient}
                </h5>
              </div>
            ) : (
              ""
            )}
          </div>
        </main>
      </div>
    ) 
  }
}

export default RegressionGraph;
