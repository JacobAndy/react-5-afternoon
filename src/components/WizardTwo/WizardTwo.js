import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateCity } from "../../ducks/reducer";

class WizardTwo extends Component {
  render() {
    let { updateCity } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>In what city will the property be located?</p>
          <br />

          <input
            placeholder="city name"
            type="text"
            onChange={e => updateCity(e.target.value)}
          />

          <Link to="/wThree">
            <button className="wTwo-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  let { city } = state;
  return {
    city
  };
};
export default connect(mapStateToProp, { updateCity })(WizardTwo);