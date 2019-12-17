import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USERS,
  CLEAR_USERS,
} from '../types';
import githubContext from './githubContext';

const GithubState = props => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, usedispatch] = useReducer(GithubReducer, intialState);

  //Search Users

  //Get User

  //Get Repos

  // Clear Users

  // Set Loading

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;