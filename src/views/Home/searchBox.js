import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRequest } from '../../state/actions/search';
import keyboard from '../../consts/keyboard';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    const { key, target: { value } } = e;
    if (key === keyboard.ENTER) {
      this.props.searchRequest(value);
    }
  }
  render() {
    return (
      <div className="search-box">
        <input className="search-box-input" onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
};

SearchBox.propTypes = {
  searchRequest: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  dispatch => ({
    searchRequest: value => dispatch(searchRequest({ searchTerm: value })),
  }),
)(SearchBox);
