import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutList from '../Workouts/WorkoutList';
import CreateWorkoutDialog from '../Workouts/CreateWorkoutDialog';

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

export default withRouter(HomeScreen);
