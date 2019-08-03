import React, { Fragment } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Header from '../Header/Header';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

function App() {
  return (
    <Fragment>
      <SnackbarProvider maxSnack={3}>
        <Header>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Header>
      </SnackbarProvider>
    </Fragment>
  );
}

export default App;
