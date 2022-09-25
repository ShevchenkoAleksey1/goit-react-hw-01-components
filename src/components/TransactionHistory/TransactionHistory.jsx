import PropTypes from 'prop-types';
import {
  TableContainer,
  Th,
  Td,
  TableTr,
} from '../TransactionHistory/TransactionHistory.styles';
const TransactionHistory = ({ items }) => {
  return (
    <TableContainer class="transaction-history">
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableTr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </TableTr>
        ))}
      </tbody>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
