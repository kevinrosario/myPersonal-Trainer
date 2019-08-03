/* eslint no-underscore-dangle: 0 */

const user = (state = null, action) => {
  switch (action.type) {
  case 'SIGNUP_SUCCESS':
  case 'SIGNIN_SUCCESS':
    return {
      ...state,
      email: action.user.email,
      token: action.user.token,
      id: action.user._id || action.user.id
    };
  case 'SIGNOUT_SUCCESS':
    return null;
  default:
    return state;
  }
};

export default user;
