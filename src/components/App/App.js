import React, { Fragment } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

function App() {
  return (
    <Fragment>
      <Header>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Header>
    </Fragment>
  );
}

export default App;
