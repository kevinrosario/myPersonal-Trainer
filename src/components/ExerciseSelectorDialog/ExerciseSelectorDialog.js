import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ExerciseFinder from './ExerciseFinder';
import ExerciseList from './ExerciseList';

// Will be used for creating a workout and updating one
function ExerciseSelectorDialog({
  selectedExercises,
  setSeletectedExercises,
  handleSubmit,
  exercisesDialogHandler
}) {
  const [exerciseList, setExerciseList] = useState([]);

  return (
    <div>
      <Dialog open onClose={exercisesDialogHandler} aria-labelledby="exercise-dialog">
        <DialogContent>
          {exerciseList.length === 0
            ? <ExerciseFinder setExerciseList={setExerciseList} />
            : (
              <ExerciseList
                selectedExercises={selectedExercises}
                setSeletectedExercises={setSeletectedExercises}
                exerciseList={exerciseList}
              />
            ) }
        </DialogContent>
        <DialogActions>
          {exerciseList.length !== 0
            ? (
              <Fragment>
                <Button
                  onClick={() => setExerciseList([])}
                  variant="contained"
                  color="secondary"
                >
                Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                Add
                </Button>
              </Fragment>
            )
            : ''}

          <Button
            onClick={exercisesDialogHandler}
            variant="contained"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withSnackbar(withRouter(ExerciseSelectorDialog));
