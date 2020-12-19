import { get } from 'lodash';

import { useSelector } from 'react-redux';

const getKey = (store, key) => get(store, key);
function getRedux(key) {
  let data = useSelector((state) => getKey(state, key));
  if (!data) {
    data = sessionStorage.getItem(key);
  }
  return data;
}
export default getRedux;
