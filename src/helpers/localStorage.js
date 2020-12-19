export const setLocalData = (key, value) => window.sessionStorage.setItem(key,
  JSON.stringify(value));
export const getLocalData = (key) => JSON.parse(window.sessionStorage.getItem(key));
export const clearAllData = () => window.sessionStorage.clear();
export const clearValue = (key) => window.sessionStorage.removeItem(key);
