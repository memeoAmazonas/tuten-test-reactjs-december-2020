import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Label } from '../../components';
import { ROUTE_LOGIN } from '../../routes/routes';
import { LOGIN_CLEAR } from '../../redux/types';
import AsycnAction from '../../redux/actions/AsycnAction';

export default () => {
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear();
    dispatch(AsycnAction(LOGIN_CLEAR));
    navigate(ROUTE_LOGIN);
  };
  return (
    <nav className="header-container justify-content-between">
      <Label id="name.app" className="title-view" />
      <button type="button" className="btn" onClick={() => logout()}><Label id="logout" className="link-dashboard" /></button>
    </nav>
  );
};
