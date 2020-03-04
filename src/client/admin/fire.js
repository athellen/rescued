// import React from "react";
// import Example from './jodit';
// class Fir extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       words: "",
//       header: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleButton = this.handleButton.bind(this);
//   }
//   handleChange(event) {
//     event.preventDefault();
//     this.setState({ [event.target.name]: event.target.value });
//   }
//   handleClick() {
//     alert(`words:${this.state.words}`);
//   }
//   handleButton() {
//     alert(`header:${this.state.header}`);
//   }

//   render() {
//     return (
//       <div
//         className="department-container"
//         style={{
//           background:
//             "url(https://i1.wp.com/fire-extinguisher-servicing.com/wp-content/uploads/2019/12/Fire3-1.jpg?fit=1200%2C751&ssl=1)",
//           height: "88vh",
//           color: "white"
//         }}
//       >
//         <div>
//           <Example/>
//         </div>
//         {/* <div>
//           <header className="head">
//             <h1>Fire Department</h1>
//           </header>
//           <main>
//             <section>
//           <h2>*111*1#</h2>
//           </section>
//           </main>
//         </div>
//         <div id="editor">styler</div>
//         <div className="left">
//           <form>
//             <textarea
//               className="fire"
//               type="text"
//               name="header"
//               value={this.state.header}
//               onChange={this.handleChange}
//             />
//           </form>
//           <button style={{ marginLeft: "290px" }} onClick={this.handleButton}>
//             Update
//           </button>
//           <form>
//             <textarea
//               className="box"
//               type="text"
//               name="words"
//               value={this.state.words}
//               onChange={this.handleChange}
//             />
//           </form>

//           <button style={{ marginLeft: "87%" }} onClick={this.handleClick}>
//             Update
//           </button>
//         </div>
//         <div className="video">
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/lUojO1HvC8c"
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div> */}
//         <div className="foot">
//           <footer>
//             <h3>Incase of fire, text 'FIRE' and your location to *111*1#</h3>
//           </footer>
//         </div>
//       </div>
//     );
//   }
// }
// export default Fir;
