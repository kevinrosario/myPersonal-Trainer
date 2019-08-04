import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import Input from '@material-ui/icons/Input';

// Options
export const authenticatedOptions = (
  <Fragment>
    <ListItem button component={Link} to="/home" key="home">
      <ListItemIcon><Home /></ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/account-configuration" key="account-configuration">
      <ListItemIcon><SettingsApplications /></ListItemIcon>
      <ListItemText primary="Account Configuration" />
    </ListItem>
    <ListItem button component={Link} to="/sign-out" key="sign-out">
      <ListItemIcon><PowerSettingsNew /></ListItemIcon>
      <ListItemText primary="Sign-Out" />
    </ListItem>
  </Fragment>
);

export const unauthenticatedOptions = (
  <Fragment>
    <ListItem button component={Link} to="/sign-in" key="sign-in">
      <ListItemIcon><Input /></ListItemIcon>
      <ListItemText primary="Sign-In" />
    </ListItem>
    <ListItem button component={Link} to="/sign-up" key="sign-up">
      <ListItemIcon><Input /></ListItemIcon>
      <ListItemText primary="Sign-Up" />
    </ListItem>
  </Fragment>
);
