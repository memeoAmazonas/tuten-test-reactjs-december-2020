import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CLEAR,
} from '../../types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, loginLoading: true };
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', payload.sessionTokenBck);
      sessionStorage.setItem('adminemail', payload.email);
      return {
        ...state,
        loginLoading: false,
        infoUser: { token: payload.sessionTokenBck, email: payload.email },
      };
    case LOGIN_ERROR:
      return { ...state, loginLoading: false, infoUserError: payload };
    case LOGIN_CLEAR:
      return {};
    default:
      return { ...state };
  }
};
