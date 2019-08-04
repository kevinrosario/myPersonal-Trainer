import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// a `user` object must be passed as a prop
// if it is null the user is not signed in
// props will also include a `component` passed
// as `Component` or a `render`
// any other props are included in `..rest`
const AuthenticatedRoute = ({
  user,
  component: Component,
  render,
  ...rest
}) => {
  // if user is passed as a prop and `render`
  // is passed then create route with `render`
  if (user && render) {
    return <Route {...rest} render={render} />;

  // if user is passed and `render` is
  // not passed, create route with `Component`
  // if user is false, redirect to home
  }

  return (
    <Route
      {...rest}
      render={props => (user
        ? <Component {...props} />
        : <Redirect to="/" />)
      }
    />
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(AuthenticatedRoute);
