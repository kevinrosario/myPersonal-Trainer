/* eslint no-underscore-dangle: 0 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { withSnackbar } from 'notistack';
import makeStyles from './WorkoutsStyles';
// import EditExerciseDialog from './EditExerciseDialog';
// import { destroyExercise } from '../../api/workout';
// import messages from '../../messages/messages';

function EditExerciseList({
  workout,
  user
}) {
  const classes = makeStyles();

  const handleDestroy = (exercise, workoutID) => {
    console.log(exercise, user, workoutID);
    // destroyExercise(exercise, user, workoutID)
    //   .then((response) => {
    //     setWorkoutTemplate(response.data.workout)
    //     enqueueSnackbar(messages.deletedSuccessfully, { variant: 'error' })
    //   })
    //   .catch(error => {
    //     console.error(error)
    //     enqueueSnackbar(messages.somethingFailed, { variant: 'error' })
    //   })
  };

  const exercisesArr = workout.exercises.map(exercise => (
    <ListItem key={exercise._id} divider>
      <ListItemText id={exercise._id}>
        <Typography variant="body1">
          {exercise.name}
        </Typography>
        <ul>
          <li key={`${exercise._id}-sets`}> Sets:</li>
          <li key={`${exercise._id}-reps`}>Reps:</li>
          <li key={`${exercise._id}-restTime`}>Rest Time:</li>
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
            handleDestroy(exercise, user, workout._id);
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

export default withSnackbar(EditExerciseList);
