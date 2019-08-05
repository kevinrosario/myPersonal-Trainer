import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import messages from '../../messages/messages';
import { initiateUpdateWorkout } from '../../actions/workouts';
import { createMultipleExercises } from '../../api/workout';
import ExerciseSelectorDialog from '../ExerciseSelectorDialog/ExerciseSelectorDialog';

function AddExerciseDialog({
  exercisesDialogHandler,
  dispatch,
  user,
  workout,
  setWorkout,
  enqueueSnackbar,
  addExerciseDialogHandler
}) {
  const [selectedExercises, setSeletectedExercises] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  const handleSubmit = () => {
    createMultipleExercises(selectedExercises, user)
      .then((response) => {
        // add response exercises to workout
        workout.exercises.push(...response.data.exercises);
        // update workout
        setWorkout(response.data.workout);
        dispatch(initiateUpdateWorkout(
          workout,
          user,
          enqueueSnackbar
        ));
      })
      .then(addExerciseDialogHandler)
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(messages.updateFailed, { variant: 'error' });
      });
  };

  return (
    <ExerciseSelectorDialog
      selectedExercises={selectedExercises}
      setSeletectedExercises={setSeletectedExercises}
      exerciseList={exerciseList}
      setExerciseList={setExerciseList}
      handleSubmit={handleSubmit}
      exercisesDialogHandler={exercisesDialogHandler}
    />
  );
}

const mapStateToProps = state => ({ user: state.user, workouts: state.workouts });

export default withSnackbar(withRouter(connect(mapStateToProps)(AddExerciseDialog)));
