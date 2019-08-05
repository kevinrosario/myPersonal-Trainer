import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { initiateWorkoutCreation } from '../../actions/workouts';
import ExerciseSelectorDialog from '../ExerciseSelectorDialog/ExerciseSelectorDialog';

function CreateWorkoutDialog({
  dispatch,
  exercisesDialogHandler,
  user,
  history,
  enqueueSnackbar,
  dialogHandler
}) {
  const [selectedExercises, setSeletectedExercises] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  const handleSubmit = () => {
    dispatch(initiateWorkoutCreation(
      selectedExercises,
      user,
      history,
      enqueueSnackbar,
      dialogHandler
    ));
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

const mapStateToProps = state => ({ user: state.user });

export default withSnackbar(withRouter(connect(mapStateToProps)(CreateWorkoutDialog)));
