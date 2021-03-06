import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchFriends } from "./actions";

// components
import Loading from "./components/Loading";
import FriendsList from "./components/FriendsList";
import Error from "./components/Error";
import AddFriendForm from "./components/AddFriendForm";

class App extends Component {
  componentDidMount() {
    let URL = "http://localhost:5000/api/friends";
    this.props.fetchFriends(URL);
  }

  render() {
    return (
      <div className="App">
        <AddFriendForm showForm={this.props.showForm} />
        <Loading fetching={this.props.fetching} />
        <FriendsList friends={this.props.friends} />
        <Error error={this.props.error} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.friends.fetching,
    fetched: state.friends.fetched,
    error: state.friends.error,
    friends: state.friends.friends,
    showForm: state.friends.showForm
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(App);
