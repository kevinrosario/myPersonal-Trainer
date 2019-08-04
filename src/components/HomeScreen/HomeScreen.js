import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import CreateWorkoutDialog from '../Workouts/CreateWorkoutDialog';
import WorkoutList from '../Workouts/WorkoutList';

function HomeScreen() {
  const [exercisesDialog, setCreateWorkoutDialog] = useState(false);

  const exercisesDialogHandler = () => {
    setCreateWorkoutDialog(!exercisesDialog);
  };

  return (
    <Fragment>
      {/* Set exercise dialog */}
      {exercisesDialog
        ? <CreateWorkoutDialog open exercisesDialogHandler={exercisesDialogHandler} />
        : ''}
      {/* Set workout list */}
      <WorkoutList exercisesDialogHandler={exercisesDialogHandler} />
    </Fragment>
  );
}

// const { user, workoutTemplates, setWorkoutTemplates, exercisesDialog, exercisesDialogHandler,
//   workoutTemplate, setWorkoutTemplate, selectedExercises, setSeletectedExercises, exerciseList,
//   setExerciseList, setUnfinishedExercises, setCurrentExercise, setRestTime,
//   setSets, makeStyles } = props
//
// setWorkoutTemplate(null)

export default withRouter(HomeScreen);
