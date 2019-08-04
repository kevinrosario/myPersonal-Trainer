import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { initiateWorkoutCreation } from '../../actions/workouts';
import ExerciseSelectorDialog from '../ExerciseSelectorDialog/ExerciseSelectorDialog';

// Functional Component
function ExercisePickerDialog({
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

// I'm reusing this component to create and to update a workout
// if (workoutTemplate) {
//   createMultipleExercises(selectedExercises, user)
//     .then(response => {
//       // add response exercises to workoutTemplate
//       workoutTemplate.exercises.push(...response.data.exercises)
//       setWorkoutTemplate({ ...workoutTemplate, exercises: workoutTemplate.exercises })
//       // update workout
//       updateWorkout(workoutTemplate, user)
//         .then(response => {
//           setWorkoutTemplate(response.data.workoutTemplate)
//           enqueueSnackbar(messages.updatedSuccessfully, { variant: 'success' })
//         })
//         .then(dialogHandler)
//         .catch(error => {
//           console.error(error)
//           enqueueSnackbar(messages.updateFailed, { variant: 'error' })
//         })
//     })
//     .catch(error => {
//       console.error(error)
//       enqueueSnackbar(messages.updateFailed, { variant: 'error' })
//     })
// } else {
//   // If no workout is selected, create a new one
// }

const mapStateToProps = state => ({ user: state.user });

export default withSnackbar(withRouter(connect(mapStateToProps)(ExercisePickerDialog)));
