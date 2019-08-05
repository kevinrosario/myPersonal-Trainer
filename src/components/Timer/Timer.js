import React, { Fragment } from 'react';
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom';
import makeStyles from './TimerStyles';

function Timer() {
  const classes = makeStyles();

  // useEffect(() => {
  //   console.log('here')
  //   setCurrentExercise(unfinishedExercises.pop())
  //   setSets(currentExercise.sets)
  //   setRestTime(currentExercise.restTime)
  // }, [timerInterval])

  // const handleStart = event => {
  //   setSets(--sets)
  //   const interval = setInterval(() => {
  //     if (restTime > 0 && sets >= 0) {
  //       restTime -= 1
  //       setRestTime(restTime)
  //     } else {
  //       clearInterval(interval)
  //       setTimerInterval(null)
  //       setRestTime(currentExercise.restTime)
  //       if (sets === 0) {
  //         setCurrentExercise(unfinishedExercises.pop())
  //         setRestTime(currentExercise.restTime)
  //         setSets(currentExercise.sets)
  //       }
  //     }
  //   }, 1000)
  //   setTimerInterval(interval)
  // }

  return (
    <div className={classes.paper}>
      <Fragment>
        <p>Hello</p>
      </Fragment>
    </div>
  );
}

// {currentExercise
//   ? <Fragment>
//     <Typography variant="h3">{restTime} sec</Typography>
//     <Typography variant="h5"> Exercise: {currentExercise.name || ''}</Typography>
//     <Typography variant="h5">Sets left: {sets}</Typography>
//     <Button variant="contained" className={classes.button} onClick={handleStart}>
//           Start
//     </Button>
//   </Fragment>
//   : <Typography variant="h5"> You are done!</Typography>}

export default withRouter(Timer);
