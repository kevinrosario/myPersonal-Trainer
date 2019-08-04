/* eslint no-underscore-dangle: 0 */
import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import makeStyles from './WorkoutsStyles';

// Functional Component
function WorkoutList({ workouts, exercisesDialogHandler }) {
  const classes = makeStyles();

  const workoutsArr = workouts.map((workout) => {
    const labelId = `workout-template-id-${workout._id}`;
    const exercisesList = workout.exercises.map(exercise => (
      <li key={exercise._id}>{exercise.name}</li>));
    return (
      <ListItem key={workout._id} component={Link} to={`/edit-workout/${workout._id}`} button alignItems="center" divider>
        <ListItemText id={labelId}>
          <Typography variant="h6">
            {workout.name}
          </Typography>
          <ul>
            {exercisesList}
          </ul>
        </ListItemText>
        <ListItemSecondaryAction>
          <Fab
            aria-label="start"
            component={Link}
            to="/workout-timer"
            onClick={() => {}}
            size="small"
            className={classes.edit}
          >
            <FitnessCenter />
          </Fab>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <Fragment>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h5">
            List of Workouts
          </Typography>
          <List className={classes.root}>
            {workoutsArr.length !== 0
              ? workoutsArr
              : (
                <Typography variant="h6" align="center">
                  New User? Click on + to add a new workout!
                </Typography>
              )}
          </List>
        </div>
      </Container>
      <Fab color="primary" aria-label="Add" className={classes.add} onClick={exercisesDialogHandler}>
        <AddIcon />
      </Fab>
    </Fragment>
  );
}

// const exerciseArr = [...workout.exercises]
// const exercise = exerciseArr.shift()
// setWorkoutTemplate(workout)
// setUnfinishedExercises([...exerciseArr])
// setCurrentExercise(exercise)
// setRestTime(exercise.restTime)
// setSets(exercise.sets)

const mapStateToProps = state => ({ workouts: state.workouts });

export default withRouter(connect(mapStateToProps)(WorkoutList));
