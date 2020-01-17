import React from "react";
import axios from "axios";
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        userName: "",
        phoneNumber: "07",
        county: "",
        sub_county: "",
        address: "",
        password: "",
        confirmpassword: ""
      }
    };

    // binding staff
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;

    // handler fuction with computed properites

    // produces a copy of the state
    this.setState({ data: { ...this.state.data, [name]: value } });
    // console.log({ [name]: [value] });
  }

  handleButton(event) {
    event.preventDefault();
    console.log(this.state.data);
    axios
      .post("/registration", this.state.data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.props.history.push("/login");
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="profcard">
        <div className="cardia">
          <h5>Registration</h5>
          <hr />
          <div
            className="prof"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              marginRight: "20px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <form>
              <div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <label>User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      name="userName"
                      value={this.state.data.userName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Phone Contact</label>
                    <input
                      type="number"
                      className="form-control"
                      name="phoneNumber"
                      value={this.state.data.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <label>County</label>
                    <input
                      type="text"
                      className="form-control"
                      name="county"
                      value={this.state.data.county}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Sub-County</label>
                    <input
                      type="text"
                      className="form-control"
                      name="sub_county"
                      value={this.state.data.sub_county}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Physical Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={this.state.data.address}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      value={this.state.data.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmpassword"
                    value={this.state.data.confirmpassword}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleButton}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
