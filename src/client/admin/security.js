import React from "react";
import police from "../../images/police.png";

class Secure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "",
      header: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClick() {
    alert(`words:${this.state.words}`);
  }
  handleButton() {
    alert(`header:${this.state.header}`);
  }

  render() {
    return (
      <div
        className="department-container"
        style={{
          background: `url(${police})`,
          height: "88%",
          color: "white"
        }}
      >
        <div>
          <header className="head">
            <h1>Security Department</h1>
          </header>
          <main>
            <section>
          <h2>*111*3#</h2>
          </section>
          </main>
        </div>
        <div>
          <form>
            <textarea
              className="fire"
              type="text"
              name="header"
              value={this.state.header}
              onChange={this.handleChange}
            />
          </form>
          <button style={{ marginLeft: "290px" }} onClick={this.handleButton}>
            Update
          </button>
          <form>
            <textarea
              className="box"
              type="text"
              name="words"
              value={this.state.words}
              onChange={this.handleChange}
            />
          </form>
          <button style={{ marginLeft: "92%" }} onClick={this.handleClick}>
            Update
          </button>
        </div>
        <div className="foot">
          <footer>
            <h3>Incase of a crime, text 'CRIME' and your location to *111*3#</h3>
          </footer>
        </div>
      </div>
    );
  }
}
export default Secure;
