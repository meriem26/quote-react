import React from "react";

class RandomQuote extends React.Component {
  constructor() {
    super();
    this.state = {
      randomQuote: {}
    };
  }
  clickHandler=()=> {
    fetch('http://localhost:3003/quotes/random')
      .then(res => res.json())
      .then(data => {
        this.setState({
          randomQuote: data
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Get a quote </button>
        <div>
          <p>{this.state.randomQuote.quote}</p>
          <p>{this.state.randomQuote.author}</p>
        </div>
      </div>
    );
  }
}
export default RandomQuote;
