import React, { Fragment } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Header from '../Header/Header';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignOut from '../SignOut/SignOut';
import HomeScreen from '../HomeScreen/HomeScreen';
import EditWorkout from '../EditWorkout/EditWorkout';
import AccountConfiguration from '../AccountConfiguration/AccountConfiguration';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';

function App() {
  return (
    <Fragment>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <Header>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <AuthenticatedRoute exact path="/sign-out" component={SignOut} />
          <AuthenticatedRoute
            exact
            path="/account-configuration"
            render={() => <AccountConfiguration open />}
          />
          <AuthenticatedRoute
            exact
            path="/home"
            render={() => <HomeScreen />}
          />
          <AuthenticatedRoute
            exact
            path="/edit-workout/:id"
            render={() => <EditWorkout />}
          />
        </Header>
      </SnackbarProvider>
    </Fragment>
  );
}

export default App;
