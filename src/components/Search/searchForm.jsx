import React from "react";
import './css/search-form.css';

export class SearchForm extends React.Component{

  constructor(props) {
    super(props);
    this.initialSearchQuery = this.props.initialSearchQuery;
    this.state = { value: this.initialSearchQuery };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <>      
        <form role="search-form" className="search-form" onSubmit={this.props.handleSubmit(this.state.value)}>
          <input 
            className="search-input" 
            type="text" 
            placeholder="What do you want to watch?" 
            value={this.state.value} 
            onChange={this.handleChange}
          />
          <input className="search-button" type="submit" value="SEARCH" />
        </form>
      </>
    );
  }
}

export default SearchForm;