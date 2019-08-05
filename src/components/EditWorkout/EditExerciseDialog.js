/* eslint no-underscore-dangle: 0 */

import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { updateExercise } from '../../api/workout';
import { updateWorkoutSuccess } from '../../actions/workouts';
import messages from '../../messages/messages';
import makeStyles from './EditWorkoutStyles';

// Functional Component
function EditExerciseDialog({
  user,
  dispatch,
  exercise,
  setExercise,
  workout,
  setWorkout,
  enqueueSnackbar,
  editExerciseDialogHandler
}) {
  const classes = makeStyles();

  const handleSave = () => {
    updateExercise(exercise, user, workout._id)
      .then((response) => {
        enqueueSnackbar(messages.updatedSuccessfully, { variant: 'success' });
        dispatch(updateWorkoutSuccess(response));
        setWorkout(response.data.workout);
      })
      .then(editExerciseDialogHandler)
      .catch((error) => {
        enqueueSnackbar(messages.updateFailed, { variant: 'error' });
        console.error(error);
      });
  };


  const handleChange = name => (event) => {
    setExercise({ ...exercise, [name]: event.target.value });
  };

  return (
    <Fragment>
      <Dialog open aria-labelledby="exercise-dialog">
        <DialogContent>
          <div className={classes.exerciseForms}>
            <TextField
              id="sets"
              label="Sets"
              type="number"
              margin="normal"
              value={exercise.sets}
              onChange={handleChange('sets')}
              InputProps={{
                inputProps: { min: 0 }
              }}
            />
            <TextField
              id="repetions"
              label="Repetions"
              type="number"
              margin="normal"
              value={exercise.repetions}
              onChange={handleChange('repetions')}
              InputProps={{
                inputProps: { min: 0 }
              }}
            />
            <TextField
              id="restTime"
              label="Rest Time (seconds)"
              type="number"
              margin="normal"
              value={exercise.restTime}
              onChange={handleChange('restTime')}
              InputProps={{
                inputProps: { min: 0 }
              }}
            />
          </div>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            color="secondary"
            variant="contained"
            onClick={editExerciseDialogHandler}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default withSnackbar(withRouter(connect(mapStateToProps)(EditExerciseDialog)));
