import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import messages from '../../messages/messages';
import { initiateUpdateWorkout } from '../../actions/workouts';
import { createMultipleExercises } from '../../api/workout';
import ExerciseSelectorDialog from '../ExerciseSelectorDialog/ExerciseSelectorDialog';

function AddExerciseDialog({
  user,
  dispatch,
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
        setWorkout({ ...workout, exercises: [...workout.exercises, ...response.data.exercises] });
        return response;
      })
      .then((response) => {
        // update workout in database.
        workout.exercises.push(...response.data.exercises);
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
      exercisesDialogHandler={addExerciseDialogHandler}
    />
  );
}

const mapStateToProps = state => ({ user: state.user, workouts: state.workouts });

export default withSnackbar(withRouter(connect(mapStateToProps)(AddExerciseDialog)));
