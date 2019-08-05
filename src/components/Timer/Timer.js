/* eslint no-underscore-dangle: 0 */
/* eslint no-plusplus: 0 */
/* eslint no-nested-ternary: 0 */
import React, { Fragment, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import makeStyles from './TimerStyles';

function Timer({ workouts, match }) {
  const classes = makeStyles();
  // Set unfinished exercises
  const [unfinishedExercises] = useState(() => {
    const work = workouts.find(stateWorkout => stateWorkout._id === match.params.id);
    return [...work.exercises];
  });
  // set current exercise
  const [currentExercise, setCurrentExercise] = useState(() => unfinishedExercises.shift());
  // set all conditions
  const [repetions, setRepetions] = useState(() => currentExercise.repetions);
  const [sets, setSets] = useState(() => currentExercise.sets);
  const [restTime, setRestTime] = useState(() => currentExercise.restTime);
  const [timerInterval, setTimerInterval] = useState(null);
  // const [finishedExercises, setFinishedExercises] = useState([]);

  useEffect(() => {
    if (restTime === 0) {
      clearInterval(timerInterval); // stop interval
      setTimerInterval(null);
      if (sets === 0) {
        if (unfinishedExercises.length > 0) {
          // set next exercise
          setCurrentExercise(() => {
            const exercise = unfinishedExercises.shift();
            setSets(() => exercise.sets);
            setRestTime(() => exercise.restTime);
            setRepetions(() => exercise.repetions);
            return exercise;
          });
        } else {
          // workout finished
          setCurrentExercise(null);
        }
      } else {
        // set next values to current exercise
        setSets(prevSet => prevSet - 1);
        setRestTime(currentExercise.restTime);
      }
    }
  }, [restTime]);

  const handleStart = () => {
    if (restTime > 0) {
      setTimerInterval(
        setInterval(() => {
          setRestTime(prevTime => prevTime - 1);
        }, 1000)
      );
    }
  };

  return (
    <div className={classes.paper}>
      <Fragment>
        {currentExercise
          ? (
            <Fragment>
              <Typography variant="h3">{`${restTime} sec`}</Typography>
              <Typography variant="h5">{`Exercise: ${currentExercise.name || ''}`}</Typography>
              <Typography variant="h5">{`Sets left: ${sets}`}</Typography>
              <Typography variant="h5">{`Expected repetions: ${repetions}`}</Typography>
              {!timerInterval
                ? (
                  <Button variant="contained" className={classes.button} onClick={handleStart}>
                    {sets !== 0 ? 'Rest' : unfinishedExercises.length === 0 ? 'Finish' : 'Next'}
                  </Button>
                )
                : ''}
            </Fragment>
          )
          : <Typography variant="h5"> You are done!</Typography>}
      </Fragment>
    </div>
  );
}


const mapStateToProps = state => ({ workouts: state.workouts });

export default withRouter(connect(mapStateToProps)(Timer));
