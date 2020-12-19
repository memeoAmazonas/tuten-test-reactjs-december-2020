import React from 'react';
import PropTypes from 'prop-types';

import Label from '../label/label';

const Radio = ({ type, setType, id }) => (
  <div className="d-flex align-items-center justify-content-between">

    <Label id={id} className="link-dashboard" />
    <input type="radio" checked={type} onChange={setType} className="p-2" />
  </div>
);
Radio.propTypes = {
  type: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};
export default Radio;
