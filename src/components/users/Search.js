import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const { text } = this.state;
    e.preventDefault();
    if (text === '') {
      this.props.setAlert('Please Enter Something', 'light');
    } else {
      this.props.searchUsers(text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users ..."
            value={this.state.text}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
