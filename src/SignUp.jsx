import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";

class SignUp extends Component {
  state = {};
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <form
          style={this.styles}
          className="py-4"
          action="index.php"
          method="POST"
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="useremail"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="col">
              <input
                type="submit"
                name="submit"
                className="form-control btn btn-secondary"
                value="Add New User"
              />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
