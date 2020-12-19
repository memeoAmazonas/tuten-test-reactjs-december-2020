import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import getRedux from '../../redux/selectors/getSelector';
import { adminemailKey, bookingKey, tokenKey } from '../../redux/selectors/keys';
import dataServices from '../../redux/api/dataServices';
import { GET_BOOKING } from '../../redux/types';
import Action from '../../redux/actions/Action';
import Table from '../../components/table/table';
import { TITLE_TABLE } from '../../static/constant';
import Header from '../layout/header';
import Radio from '../../components/input/radio';

const Home = () => {
  const dispatch = useDispatch();
  const bookingList = getRedux(bookingKey);
  const token = getRedux(tokenKey);
  const adminemail = getRedux(adminemailKey);
  const { t } = useTranslation();
  const [type, setType] = React.useState(0);
  React.useEffect(() => {
    if (!bookingList && token) {
      const headers = { token, adminemail };
      const payload = { ...dataServices.getBooking, headers };
      dispatch(Action(GET_BOOKING, payload));
    }
  });
  const filterField = (key, value) => {
    const headers = { token, adminemail };
    const payload = {
      ...dataServices.getBooking, headers, typeFilter: type, keyFilter: key, valueFilter: value,
    };
    dispatch(Action(GET_BOOKING, payload));
  };
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="d-flex justify-content-around mb-3 mt-3 bg-dark align-items-center">
          <div className="w-25">
            <div className="d-flex flex-column w-50 ">
              <Radio type={type === 0} id="greater.than" setType={() => setType(0)} />
              <Radio type={type === 1} id="smaller.than" setType={() => setType(1)} />
            </div>
          </div>
          <input className="input-group w-25 mr-2 h-100 p-3" onChange={(e) => filterField('bookingId', e.target.value)} placeholder={t('booking.id')} />
          <input className="input-group w-25 h-100 p-3" onChange={(e) => filterField('bookingPrice', e.target.value)} placeholder={t('booking.price')} />
        </div>
        {bookingList && <Table title={TITLE_TABLE} body={bookingList} />}
      </div>
    </>
  );
};
export default Home;
