import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import makeStyles from './DialogStyles';

// Functional Component
function ExerciseList({ selectedExercises, setSeletectedExercises, exerciseList }) {
  const classes = makeStyles();

  const handleToggle = value => () => {
    const currentIndex = selectedExercises.indexOf(value);
    const newChecked = [...selectedExercises];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSeletectedExercises(newChecked);
  };

  const exercisesArr = exerciseList.map(exercise => (
    <ListItem key={exercise.id} role={undefined} dense button onClick={handleToggle(exercise)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={selectedExercises.indexOf(exercise) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': `checkbox-list-label-${exercise.name}` }}
        />
      </ListItemIcon>
      <ListItemText id={exercise.id} primary={exercise.name} />
    </ListItem>
  ));

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        List of Exercises
        </Typography>
        <List className={classes.root}>
          {exercisesArr}
        </List>
      </div>
    </Container>
  );
}

export default ExerciseList;
