/* eslint no-underscore-dangle: 0 */

import React, { Fragment, useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { initiateUpdateWorkout, initiateDestroyWorkout } from '../../actions/workouts';
import makeStyles from './EditWorkoutStyles';
import EditExerciseList from './EditExerciseList';
import AddExerciseDialog from './AddExerciseDialog';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import { getTemplate, updateWorkout, destroyWorkout } from '../../api/workout';

function EditWorkout({
  match,
  user,
  workouts,
  dispatch,
  enqueueSnackbar,
  history
}) {
  // Set exercise from state on component mount
  // This component is getting rendered using a link.
  const [workout, setWorkout] = useState(() => (
    workouts.find(stateWorkout => stateWorkout._id === match.params.id)));
  const [addExercisesDialog, setAddExerciseDialog] = useState(false);
  const classes = makeStyles();

  const addExerciseDialogHandler = () => {
    setAddExerciseDialog(!addExercisesDialog);
  };

  const handleChange = name => (event) => {
    setWorkout({ ...workout, [name]: event.target.value });
  };

  // update workout name
  const handleUpdate = () => {
    dispatch(initiateUpdateWorkout(
      workout,
      user,
      enqueueSnackbar,
      addExerciseDialogHandler
    ));
  };

  // destroy workout
  const handleDestroy = () => {
    dispatch(initiateDestroyWorkout(
      workout,
      user,
      enqueueSnackbar,
      history
    ));
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          {workout
            ? (
              <Fragment>
                <TextField
                  id="workout-name"
                  label="Name"
                  className={classes.textField}
                  value={workout.name || ''}
                  onChange={handleChange('name')}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                          onClick={handleUpdate}
                        >
                          <SaveIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography component="h1" variant="h5">
                List of Exercises
                </Typography>
                <EditExerciseList user={user} workout={workout} setWorkout={setWorkout} />
              </Fragment>
            )
            : ''}
          {/* Show something when workout does not exist */}
        </div>
      </Container>
      {/* Dialog to add more exercises */}
      {addExercisesDialog
        ? (
          <AddExerciseDialog
            open
            workout={workout}
            setWorkout={setWorkout}
            addExerciseDialogHandler={addExerciseDialogHandler}
          />
        )
        : ''}
      <div className={classes.add}>
        <Fab
          aria-label="Delete Exercise"
          className={classes.fab}
          color="secondary"
          onClick={handleDestroy}
        >
          <DeleteIcon />
        </Fab>
        <Fab aria-label="Add Exercise" color="primary" onClick={addExerciseDialogHandler}>
          <AddIcon />
        </Fab>
      </div>
    </Fragment>
  );
}
// {addExercisesDialog
//   ? ()
//   : ''}
// Add to each exercise and link to timer
// <Fab aria-label="Start Exercise" className={classes.fab}>
//   <FitnessCenterIcon />
// </Fab>

const mapStateToProps = state => ({ user: state.user, workouts: state.workouts });

export default withSnackbar(withRouter(connect(mapStateToProps)(EditWorkout)));
