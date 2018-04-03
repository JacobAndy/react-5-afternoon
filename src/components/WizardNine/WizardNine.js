import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAddressOne,
  updateAddressTwo,
  updateAddressThree
} from "../../ducks/reducer";

class WizardNine extends Component {
  render() {
    let { updateAddressOne, updateAddressTwo, updateAddressThree } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your address?</p> <br />
          <input
            type="text"
            placeholder="Line One"
            onChange={e => updateAddressOne(e.target.value)}
          />
          <input
            type="text"
            placeholder="Line Two"
            onChange={e => updateAddressTwo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Line Three"
            onChange={e => updateAddressThree(e.target.value)}
          />
          <Link to="/wTen">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  let { address } = state;
  return {
    address
  };
};

export default connect(mapStateToProp, {
  updateAddressOne,
  updateAddressTwo,
  updateAddressThree
})(WizardNine);
