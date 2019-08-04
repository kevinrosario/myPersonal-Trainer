const status = (state = '', action) => {
  switch (action.type) {
  case 'SIGNUP_REQUEST':
  case 'SIGNUP_SUCCESS':
  case 'SIGNUP_FAILURE':
  case 'SIGNIN_REQUEST':
  case 'SIGNIN_SUCCESS':
  case 'SIGNIN_FAILURE':
  case 'CHANGEPW_REQUEST':
  case 'CHANGEPW_SUCCESS':
  case 'CHANGEPW_FAILURE':
  case 'SIGNOUT_SUCCESS':
  case 'SIGNOUT_FAILURE':
  case 'FETCH_WORKOUT_REQUEST':
  case 'FETCH_WORKOUT_SUCCESS':
  case 'FETCH_WORKOUT_FAILURE':
    return action.type;
  case 'RESET_STATUS':
    return '';
  default:
    return state;
  }
};

export default status;
