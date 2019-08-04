import axios from 'axios';
import { apiUrl } from '../apiConfig';

export const signUp = credentials => axios({
  method: 'POST',
  url: `${apiUrl}/sign-up`,
  data: {
    credentials: {
      email: credentials.email,
      password: credentials.password,
      password_confirmation: credentials.passwordConfirmation,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      height: credentials.height,
      weight: credentials.weight
    }
  }
});

export const signIn = credentials => axios({
  url: `${apiUrl}/sign-in`,
  method: 'POST',
  data: {
    credentials: {
      email: credentials.email,
      password: credentials.password
    }
  }
});

export const signOut = user => axios({
  url: `${apiUrl}/sign-out`,
  method: 'DELETE',
  headers: {
    Authorization: `Token token=${user.token}`
  }
});

export const changePassword = (passwords, user) => axios({
  url: `${apiUrl}/change-password`,
  method: 'PATCH',
  headers: {
    Authorization: `Token token=${user.token}`
  },
  data: {
    passwords: {
      old: passwords.oldPassword,
      new: passwords.newPassword
    }
  }
});
