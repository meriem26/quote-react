import React from "react";
class SearchQuote extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "",
      authorName: "",
      searchResult: []
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleClick = (event) => {event.preventDefault()
    fetch(
      `http://localhost:3003/quotes/search?word=${this.state.word}&authorName=${
        this.state.authorName
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchResult: data
        });
      });
  };

  render() {
    console.log(this.state.searchResult);

    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            value={this.state.word}
            placeholder="Search word"
            name="word"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            value={this.state.authorName}
            placeholder="Author Name"
            name="authorName"
            onChange={this.handleInputChange}
          />
          <button >Search Quote</button>
        </form>

        {this.state.searchResult.map(quote => (
          <div>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default SearchQuote;
