import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import { Label } from '../../components';
import Action from '../../redux/actions/Action';
import { LOGIN } from '../../redux/types';
import dataServices from '../../redux/api/dataServices';
import { infoUserErrorKey, infoUserKey } from '../../redux/selectors/keys';
import getRedux from '../../redux/selectors/getSelector';
import { ROUTE_HOME } from '../../routes/routes';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { t } = useTranslation();
  const infoUser = getRedux(infoUserKey);
  const infoUserError = getRedux(infoUserErrorKey);
  const disabled = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  const doLogin = () => {
    if (disabled) {
      const payload = {
        ...dataServices.login,
        url: email,
        headers: { password },
      };
      dispatch(Action(LOGIN, payload));
    }
  };
  React.useEffect(() => {
    if (infoUser) {
      navigate(ROUTE_HOME);
    }
  });
  return (
    <div className="w-50 bg-dark p-5 mr-auto ml-auto margin-top-25">
      <div className="ml-auto mr-auto w-25 h-100 d-flex flex-column align-items-center">
        <Label id="email" className="link-dashboard" />
        <input
          className="input-group h-100 p-3"
          value={email}
          placeholder={t('email')}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label id="password" className="link-dashboard mt-3" />
        <input
          className="input-group h-100 p-3"
          value={password}
          placeholder={t('password')}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={!disabled}
          className={!disabled ? 'w-75 mt-4 p-2' : 'btn-primary w-75 mt-4 p-2'}
          type="button"
          onClick={() => doLogin()}
        >
          <Label id="login" />
        </button>
        {infoUserError && <Label id="error.login" className="text-danger mt-3 font-weight-bold" /> }
      </div>
    </div>
  );
};
export default Login;
