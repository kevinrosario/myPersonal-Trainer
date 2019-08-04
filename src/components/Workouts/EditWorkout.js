/* eslint no-underscore-dangle: 0 */

import React, { Fragment, useEffect, useState } from 'react';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import EditExerciseList from './EditExerciseList';
// import ExerciseSelectorDialog from '../ExerciseSelectorDialog/ExerciseSelectorDialog';
import makeStyles from './WorkoutsStyles';
// import { getTemplate, updateWorkout, destroyWorkout } from '../../api/workout';
// import messages from '../Messages/messages';

function EditWorkout({ match, user, workouts }) {
  const [workout, setWorkout] = useState(null);
  const classes = makeStyles();

  useEffect(() => {
    const work = workouts.find(stateWorkout => stateWorkout._id === match.params.id);
    setWorkout(work);
  }, []);

  const handleChange = name => (event) => {
    setWorkout({ ...workout, [name]: event.target.value });
  };

  // const handleUpdate = event => {
  //   updateWorkout(workout, user)
  //     .then((response) => {
  //       setWorkoutTemplate(response.data.workout)
  //       enqueueSnackbar(messages.updatedSuccessfully, { variant: 'success' })
  //     })
  //     .catch(console.error)
  // }

  // const handleDestroy = event => {
  //   destroyWorkout(workout, user)
  //     .then(() => {
  //       history.push('/home')
  //       setWorkoutTemplate(null)
  //       enqueueSnackbar(messages.deletedSuccessfully, { variant: 'error' })
  //     })
  //     .catch(console.error)
  // }

  return (
    <Fragment>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          {workout
            ? (
              <Fragment>
                <TextField
                  id="workout-name"
                  label="Name"
                  className={classes.textField}
                  value={workout.name || ''}
                  onChange={handleChange('name')}
                  margin="normal"
                />
                <Typography component="h1" variant="h5">
                List of Exercises
                </Typography>
                <EditExerciseList user={user} workout={workout} />
              </Fragment>
            )
            : ''}
        </div>
      </Container>
    </Fragment>
  );
}
// {exercisesDialog
//   ? <ExerciseSelectorDialog open user={user} />
//   : ''}
// <div className={classes.add}>
//   <Fab aria-label="Save Exercise" className={classes.fab} color="secondary"
//     onClick={handleUpdate}>
//     <SaveIcon />
//   </Fab>
//   <Fab aria-label="Delete Exercise" className={classes.fab} color="secondary"
//     onClick={handleDestroy}>
//     <DeleteIcon />
//   </Fab>
//   <Fab aria-label="Add Exercise" color="primary" onClick={exercisesDialogHandler}>
//     <AddIcon />
//   </Fab>
// </div>
// <Fab aria-label="Start Exercise" className={classes.fab}>
//   <FitnessCenterIcon />
// </Fab>

const mapStateToProps = state => ({ user: state.user, workouts: state.workouts });

export default withSnackbar(withRouter(connect(mapStateToProps)(EditWorkout)));
