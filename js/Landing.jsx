// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  };

  goToSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
          <Link to="/search">or Browse All</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange: e => {
    dispatch(setSearchTerm(e.target.value));
  }
});

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
