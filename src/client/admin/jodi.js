import React from "react";
import Example from "./jodit";
class Fir extends React.Component {
  constructor(props) {
    super(props);
    state = {
      config: {
        readonly: false,
        toolbar: true
      },
      value: "Test",
      spin: 1
    };
  }
  handleChange = () => {
    this.setState(prevState => ({
      config: prevState.config,
      value: this.refs.input.value
    }));
  };

  render() {
    return (
      <div
        className="department-container"
        style={{
          background:
            "url(https://i1.wp.com/fire-extinguisher-servicing.com/wp-content/uploads/2019/12/Fire3-1.jpg?fit=1200%2C751&ssl=1)",
          height: "88vh",
          color: "white"
        }}
      >
        <Example
          value={this.state.value}
          config={this.state.config}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Fir;
