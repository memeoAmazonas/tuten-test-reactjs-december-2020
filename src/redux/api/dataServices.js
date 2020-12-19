import {
  LOGIN_SUCCESS, LOGIN_ERROR, GET_BOOKING_SUCCESS, GET_BOOKING_ERROR,
} from '../types';
import { CURRENT, EMAIL } from '../../static/constant';

const dataServices = {
  login: {
    method: 'PUT',
    success: LOGIN_SUCCESS,
    error: LOGIN_ERROR,
  },
  getBooking: {
    method: 'GET',
    success: GET_BOOKING_SUCCESS,
    error: GET_BOOKING_ERROR,
    params: {
      current: CURRENT,
    },
    url: `${EMAIL}/bookings`,
    typeFilter: '',
    keyFilter: '',
    valueFilter: '',
  },
};
export default dataServices;
