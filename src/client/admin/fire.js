import React from 'react'

class Fir extends React.Component{
    constructor(props){
        super(props);
    this.state = {
    words:""
};
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    }
    handleChange(event){
        event.preventDefault();
        this.setState({ [event.target.name]:event.target.value })
    }
    handleClick(){
        alert(`words:${this.state.words}`)
    }

render() {
    return (
<div>
    <form>
        <input className="box"
        type="text" name="words" value={this.state.words} onChange={this.handleChange}
        />
        </form>

        <button onClick={this.handleClick}>
            Update
        </button>

</div>
    )
}
}
export default Fir;
