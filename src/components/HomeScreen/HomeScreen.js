import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutList from '../Workouts/WorkoutList';
import CreateWorkoutDialog from '../Workouts/CreateWorkoutDialog';

function HomeScreen() {
  const [createWorkoutDialog, setCreateWorkoutDialog] = useState(false);

  const createWorkoutDialogHandler = () => {
    setCreateWorkoutDialog(!createWorkoutDialog);
  };

  return (
    <Fragment>
      {/* Set exercise dialog */}
      {createWorkoutDialog
        ? <CreateWorkoutDialog open createWorkoutDialogHandler={createWorkoutDialogHandler} />
        : ''}
      {/* Set workout list */}
      <WorkoutList createWorkoutDialogHandler={createWorkoutDialogHandler} />
    </Fragment>
  );
}

export default withRouter(HomeScreen);
