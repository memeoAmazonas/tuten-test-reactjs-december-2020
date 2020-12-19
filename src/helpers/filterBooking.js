import moment from 'moment';
import { includes, filter } from 'lodash';
import filterDeep from 'deepdash-es/filterDeep';

const toFilter = (data, typeFilter, keyFilter, valueFilter) => {
  if (valueFilter !== '') {
    switch (typeFilter) {
      case 0:
        return filter(data, (item) => item[keyFilter] >= valueFilter);
      case 1:
        return filter(data, (item) => item[keyFilter] <= valueFilter);
      default:
        return data;
    }
  }
  return data;
};

export default (data, typeFilter, keyFilter, valueFilter) => {
  const ids = ['bookingId', 'bookingTime', 'streetAddress', 'bookingPrice', 'firstName', 'lastName'];
  let values = {};
  let names = [];
  const response = [];
  filterDeep(
    data, (value, key) => {
      if (includes(ids, key)) {
        if (includes(names, key)) {
          const {
            bookingId, bookingTime, streetAddress, bookingPrice, firstName, lastName,
          } = values;
          response.push({
            bookingId: bookingId || '',
            bookingTime: moment(bookingTime).format('DD/MM/YYYY') || '',
            streetAddress: streetAddress || '',
            bookingPrice: bookingPrice || '',
            client: (firstName && lastName) ? `${firstName} ${lastName}` : '',
          });
          names = [];
          values = [];
        } else {
          names.push(key);
        }
        values = ({ [key]: value, ...values });
      }
    },
  );
  return toFilter(response, typeFilter, keyFilter, valueFilter);
};
