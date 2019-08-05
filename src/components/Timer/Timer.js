/* eslint no-underscore-dangle: 0 */

import React, { Fragment, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import makeStyles from './TimerStyles';

function Timer({ workouts, match }) {
  const classes = makeStyles();
  // const [sets, setSets] = useState({});
  // const [workout, setWorkout] = useState({});
  // const [restTime, setRestTime] = useState({});
  const [currentExercise, setCurrentExercise] = useState({});
  const [unfinishedExercises, setUnfinishedExercises] = useState([]);
  // const [finishedExercise, setFinishedExercises] = useState([]);

  useEffect(() => {
    const work = workouts.find(stateWorkout => stateWorkout._id === match.params.id);
    setUnfinishedExercises([...work.exercises]);
    setCurrentExercise(unfinishedExercises.shift());
  }, []);

  useEffect(() => {
    setCurrentExercise(unfinishedExercises.pop());
  }, [unfinishedExercises]);

  console.log(unfinishedExercises);

  const handleStart = (event) => {
    console.log(event);
    // setSets(--sets)
    // const interval = setInterval(() => {
    //   if (restTime > 0 && sets >= 0) {
    //     restTime -= 1
    //     setRestTime(restTime)
    //   } else {
    //     clearInterval(interval)
    //     setTimerInterval(null)
    //     setRestTime(currentExercise.restTime)
    //     if (sets === 0) {
    //       setCurrentExercise(unfinishedExercises.pop())
    //       setRestTime(currentExercise.restTime)
    //       setSets(currentExercise.sets)
    //     }
    //   }
    // }, 1000)
    // setTimerInterval(interval)
  };

  return (
    <div className={classes.paper}>
      <Fragment>
        {currentExercise
          ? (
            <Fragment>
              <Typography variant="h3">{`${currentExercise.restTime} sec`}</Typography>
              <Typography variant="h5">{`Exercise: ${currentExercise.name || ''}`}</Typography>
              <Typography variant="h5">{`Sets left: ${currentExercise.sets}`}</Typography>
              <Button variant="contained" className={classes.button} onClick={handleStart}>
                    Start
              </Button>
            </Fragment>
          )
          : <Typography variant="h5"> You are done!</Typography>}
      </Fragment>
    </div>
  );
}

const mapStateToProps = state => ({ workouts: state.workouts });

export default withRouter(connect(mapStateToProps)(Timer));
