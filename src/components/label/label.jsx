import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Label = ({ className, id, values }) => {
  const { t } = useTranslation();
  return (
    <span className={className}>
      {t(id, values)}
    </span>
  );
};
Label.defaultProps = {
  className: '',
  values: {},
};
Label.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  values: PropTypes.shape({}),
};
export default Label;
