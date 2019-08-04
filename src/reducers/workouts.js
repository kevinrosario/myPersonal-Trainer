/* eslint no-underscore-dangle: 0 */

const workouts = (state = null, action) => {
  switch (action.type) {
  case 'FETCH_WORKOUT_SUCCESS':
    return {
      ...state,
      workouts: action.workouts
    };
  case 'SIGNOUT_SUCCESS':
    return null;
  default:
    return state;
  }
};

export default workouts;
