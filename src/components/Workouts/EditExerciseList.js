/* eslint no-underscore-dangle: 0 */

import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { destroyExercise } from '../../api/workout';
import makeStyles from './WorkoutsStyles';
import messages from '../../messages/messages';
import { updateWorkoutSuccess } from '../../actions/workouts';
// import EditExerciseDialog from './EditExerciseDialog';

function EditExerciseList({
  workout,
  user,
  enqueueSnackbar,
  dispatch
}) {
  // I need to re-render component when store changes, so I created this until something comes.
  const [thisWorkout, setThisWorkout] = useState(workout);
  const classes = makeStyles();

  const handleDestroy = (exercise, workoutID) => {
    destroyExercise(exercise, user, workoutID)
      .then((response) => {
        setThisWorkout(response.data.workout);
        dispatch(updateWorkoutSuccess(response));
        enqueueSnackbar(messages.deletedSuccessfully, { variant: 'error' });
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(messages.somethingFailed, { variant: 'error' });
      });
  };

  const exercisesArr = thisWorkout.exercises.map(exercise => (
    <ListItem key={exercise._id} divider>
      <ListItemText id={exercise._id}>
        <Typography variant="body1">
          {exercise.name}
        </Typography>
        <ul>
          <li key={`${exercise._id}-sets`}>{`Sets: ${exercise.sets}`}</li>
          <li key={`${exercise._id}-reps`}>{`Reps: ${exercise.repetions}`}</li>
          <li key={`${exercise._id}-restTime`}>{`Rest Time: ${exercise.restTime}`}</li>
        </ul>
      </ListItemText>
      <ListItemSecondaryAction>
        <Fab
          className={classes.fab}
          aria-label="Edit Exercise"
          size="small"
          onClick={() => {}}
        >
          <EditIcon />
        </Fab>
        <Fab
          className={classes.fab}
          aria-label="Delete Exercise"
          size="small"
          onClick={() => {
            handleDestroy(exercise, workout._id);
          }}
        >
          <DeleteIcon />
        </Fab>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return (
    <List className={classes.root}>
      {exercisesArr}
    </List>
  );
}

// {editExercisesDialog
//   ? (
//     <EditExerciseDialog
//       open
//       user={user}
//       exercise={exercise}
//       setExercise={setExercise}
//     />
//   )
//   : ''}
//
// {
//   editExercisesDialogHandler()
//   setExercise(exercise)
// }

const mapStateToProps = state => ({ user: state.user });


export default withSnackbar(connect(mapStateToProps)(EditExerciseList));
