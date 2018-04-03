import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateHistory } from "../../ducks/reducer";

class WizardEight extends Component {
  render() {
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>
            Have you had a bankruptcy or foreclosure in the past seven years?{" "}
          </p>
          <br />
          <div className="row">
            <Link to="/wNine">
              <button
                value="Has never been in bankruptcy"
                onClick={() => this.props.updateHistory("no")}
              >
                No
              </button>
            </Link>
            <Link to="/wNine">
              <button
                value="Has had bankruptcy before"
                onClick={() => this.props.updateHistory("Bankcruptcy")}
              >
                Bankruptcy
              </button>
            </Link>
            <Link to="/wNine">
              <button
                value="Has had a foreclosure before"
                onClick={() => this.props.updateHistory("Foreclosure")}
              >
                Foreclosure
              </button>
            </Link>
            <Link to="/wNine">
              <button
                value="Has had both a foreclosure and a bankruptcy"
                onClick={() =>
                  this.props.updateHistory("Bankcruptcy and Foreclosure")
                }
              >
                Both
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  let { history } = state;
  return {
    history
  };
};

export default connect(mapStateToProp, { updateHistory })(WizardEight);
