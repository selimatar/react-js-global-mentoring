import React from "react";
import './search-form.css';

export class SearchForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A film was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form style={{margin: "30px"}} onSubmit={this.handleSubmit}>
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