import React from "react";
import PropTypes from "prop-types";

const ControlPanel = props => (
  <div>
    <div className="row">
      <a
        className="waves-effect waves-light btn red lighten-1"
        onClick={props.calcRegression}
      >
        Toggle Regression Curve
      </a>
    </div>
  </div>
);

export default ControlPanel;

ControlPanel.propType = {
  switchAge: PropTypes.func
};
