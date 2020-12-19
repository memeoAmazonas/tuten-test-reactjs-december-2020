import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import { Table as TableComponent } from 'reactstrap';
import Label from '../label/label';

const Table = ({ title, body }) => {
  const tableTitles = title.map((item) => <th key={item}><Label id={item} /></th>);
  const tableBody = body.map((item) => (
    <tr key={uniqueId()}>
      <td>{item.bookingId}</td>
      <td>{item.client}</td>
      <td>{item.bookingTime}</td>
      <td>{item.streetAddress}</td>
      <td>{item.bookingPrice}</td>
    </tr>
  ));
  return (
    <TableComponent dark>
      <thead>
        <tr>
          {tableTitles}
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </TableComponent>
  );
};
Table.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.arrayOf(PropTypes.shape({
    bookingId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    client: PropTypes.string,
    bookingTime: PropTypes.string,
    streetAddress: PropTypes.string,
    bookingPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
};
Table.defaultProps = {
  title: [],
  body: [],
};
export default Table;
