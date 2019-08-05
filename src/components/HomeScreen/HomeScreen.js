import React, { Fragment, useState } from 'react';
import WorkoutList from './WorkoutList';
import CreateWorkoutDialog from './CreateWorkoutDialog';

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

export default HomeScreen;
