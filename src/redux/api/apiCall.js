import axios from 'axios';
import baseUrl from './urls';
import { APP } from '../../static/constant';

const apiCall = (url, method, params = null, data = null, headers = null) => axios({
  method,
  params,
  url: `${baseUrl}${url}`,
  data,
  headers: {
    'Content-Type': 'application/json', Accept: 'application/json', app: APP, ...headers,
  },
});

export default apiCall;
