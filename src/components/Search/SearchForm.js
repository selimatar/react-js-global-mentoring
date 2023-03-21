import React from "react";
import './search-form.css';

function handleSubmit(value) {
  return event => {
    event.preventDefault()
    alert('A film was submitted: ' + value);
  }
}

export class SearchForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form style={{margin: "40px"}} onSubmit={handleSubmit(this.state.value)}>
        <h2>Search Form Component</h2>
        <input 
          className="search-input" 
          type="text" 
          placeholder="What do you want to watch?" 
          value={this.state.searchText} 
          onChange= {this.handleChange} 
        />
        <input className="search-button" type="submit" value="SEARCH" />
      </form>
    );
  }
}

export default SearchForm;