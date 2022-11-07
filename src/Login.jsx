import React, { Component } from "react";
import axios from "axios";
import "./Home.css";

// const formInput = (props) => {
//   const { errorMessage } = props;

//   return (
//     <span style={{ padding: "3px", fontSize: "12px", color: "red" }}>
//       {errorMessage}
//     </span>
//   );
// };

class Login extends Component {
  state = {
    email: "",
    password: ""

    // error: "",
  };

  handleChange = async (e) => {
    await this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   this.state.firstname,
    //   this.state.lastname,
    //   this.state.email,
    //   this.state.password,
    //   this.state.reenterpassword
    // );

    let error;
    if (this.state.error === true) {
      <p>Field can't be blank</p>;
    } else {
      let formData = new FormData();
      formData.append("firstname", this.state.firstname);
      formData.append("lastname", this.state.lastname);
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);
      formData.append("reenterpassword", this.state.reenterpassword);

      const url = "http://192.168.1.24/naira4dollar_database_backend/";
      axios
        .post(url, formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response));
    }
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "azure",
  };

  style2 = {
    fontSize: 17,
    // fontWeight: "bold",
    color: "azure",
  };

  formBody = {
    textAlign: "center",
    // width: "60%",
    margin: "auto",
    border: "solid",
    borderColor: "rgb(220, 231, 245)",
    boxShadow: "20rem",
    justifyContent: "center",
    justifyItems: "center",
  };

  inputField = {
    // width: 51%
    outline: "none",
    padding: "10px 10px",
    margin: "10px 0",
    width: "20rem",
    // border-left: 0;
    // border-right: 0;
    // border-top: 0;
    borderBottom: "2px solid",
  };

  render() {
    // let error = false;
    // error =
    //   (this.state.firstname = "") ||
    //   (this.state.lastname = "") ||
    //   (this.state.email = "") ||
    //   (this.state.password = "") ||
    //   (this.state.reenterpassword = "")
    //     ? (error = true)
    //     : (error = false);

    return (
      <React.Fragment>
        <div className="opening-section row p-5">
          <div className="col-6">
            {" "}
            <h1 style={this.styles} className="mt-5 mb-4">
              Welcome to the Login Page
            </h1>
            <p style={this.style2}>
              We started this industry since the days of e-gold (Since 2006) and
              have been growing to be your best choice for anything e-currency.
              Naira4Dollar started from a small Cyber Cafe in Ibadan Nigeria in
              2006 as a bridge between those looking for where to buy e-gold and
              those looking for how to cash out their online earnings. With no
              template, no guide and $0 in funding, Naira4Dollar grew to be
              Nigeria's biggest and most reliable exchange via pure resilience,
              hard-work, honesty, and pursuit of client-oriented goals...
            </p>
            <p style={this.style2} className="my-4">
              Naira4Dollar, RELIABLE ALWAYS!
            </p>
          </div>
          <form
            style={this.formBody}
            className="col-4 py-4"
            action="index.php"
            method="POST"
          >
            <div>
              <div>
                
                <div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="email"
                    style={this.inputField}
                    className="form-control"
                    value={this.state.email}
                    placeholder="Email Address"
                    // required={true}
                    errorMessage="Invalid e-mail address!"
                  />
                </div>
                <div>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    id="password"
                    style={this.inputField}
                    className="form-control"
                    value={this.state.password}
                    placeholder="Enter Password"
                    errorMessage="Password should be between 8-20 characters, and should include at least 1 letter, 1 number, and 1 special character!"
                    // required={true}
                  />
                </div>
              </div>
              <div>
                <input
                  onClick={this.handleSubmit}
                  type="submit"
                  id="submit"
                  style={this.inputField}
                  className="form-control btn btn-secondary me-3"
                  value="Login"
                />
                <script>
                  {" "}
                  if(error.hasOwnProperty(true)) {<p>Field can't be empty</p>}
                </script>
              </div>
              <div style={{ color: "azure" }}>
                Don't have an account?{" "}
                <button
                  style={{ borderBottom: "2px solid" }}
                  className="btn btn-secondary"
                >
                  {" "}
                  <a
                    style={{ color: "azure", textDecoration: "none" }}
                    href="./Signup"
                  >
                    Sign up
                  </a>{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
