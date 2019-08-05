/* eslint no-underscore-dangle: 0 */

import axios from 'axios';
import { apiUrl, thirdPartyAPI } from '../apiConfig';

export const createWorkout = (exercises, user) => axios({
  method: 'POST',
  url: `${apiUrl}/workouts`,
  headers: {
    Authorization: `Token token=${user.token}`
  },
  data: {
    exercises
  }
});

// // Call to third party API to request exercises
export const getExercises = (parameters) => {
  const parametersArr = Object.entries(parameters);
  let urlParameters = '';
  parametersArr.forEach((parameter) => {
    if (parameter[1]) {
      urlParameters += `&${parameter[0]}=${parameter[1]}`;
    }
  });
  return axios({
    method: 'GET',
    url: thirdPartyAPI + urlParameters
  });
};

export const createMultipleExercises = (exercises, user) => axios({
  method: 'POST',
  url: `${apiUrl}/multiple-exercises`,
  headers: {
    Authorization: `Token token=${user.token}`
  },
  data: {
    exercises
  }
});

export const updateWorkout = (workout, user) => axios({
  method: 'PATCH',
  url: `${apiUrl}/workouts/${workout._id}`,
  headers: {
    Authorization: `Token token=${user.token}`
  },
  data: {
    workout
  }
});

export const destroyWorkout = (workout, user) => axios({
  method: 'DELETE',
  url: `${apiUrl}/workouts/${workout._id}`,
  headers: {
    Authorization: `Token token=${user.token}`
  }
});

// export const getAllTemplates = user => {
//   return axios({
//     method: 'GET',
//     url: apiUrl + '/workout-templates'
//   })
// }
//
// export const getUserTemplates = user => {
//   return axios({
//     method: 'GET',
//     url: apiUrl + '/user-workout-templates',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     }
//   })
// }
//
// export const getTemplate = (user, id) => {
//   return axios({
//     method: 'GET',
//     url: apiUrl + '/workout-templates/' + id,
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     }
//   })
// }
//

//
// export const updateExercise = (exercise, user, workoutTemplateID) => {
//   return axios({
//     method: 'PATCH',
//     url: apiUrl + `/exercises/${exercise._id}`,
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     },
//     data: {
//       exercise,
//       id: workoutTemplateID
//     }
//   })
// }
//

// export const destroyExercise = (exercise, user, workoutTemplateID) => {
//   return axios({
//     method: 'DELETE',
//     url: apiUrl + `/exercises/${exercise._id}`,
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     },
//     data: {
//       workoutTemplateID
//     }
//   })
// }
