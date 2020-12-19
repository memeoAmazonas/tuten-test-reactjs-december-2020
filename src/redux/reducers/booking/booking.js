import { GET_BOOKING, GET_BOOKING_ERROR, GET_BOOKING_SUCCESS } from '../../types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_BOOKING:
      return { ...state, bookingLoading: true };
    case GET_BOOKING_SUCCESS:
      return { ...state, bookingLoading: false, booking: payload };
    case GET_BOOKING_ERROR:
      return { ...state, bookingLoading: false, bookingError: payload };
    default:
      return { ...state };
  }
};
