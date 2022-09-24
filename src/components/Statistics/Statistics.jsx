import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Titel,
  StatList,
  List,
  Label,
  Percentage,
} from '../Statistics/Statistics.styles';
export const Statistics = ({ title = '', stats }) => {
  function RandomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
  }
  return (
    <StatisticsSection class="statistics">
      <Titel class="title">{title}</Titel>

      <StatList class="stat-list">
        {stats.map(state => (
          <List
            class="item"
            key={state.id}
            style={{ backgroundColor: RandomColor() }}
          >
            <Label class="label">{state.label}</Label>
            <Percentage class="percentage">{state.percentage}%</Percentage>
          </List>
        ))}
      </StatList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
// import PropTypes from 'prop-types';
// import { Statistics } from '../Statistics/Statistics';

// export const StatisticsList = ({ stats }) => {
//   return (
//     <div>
//       {stats.map(state => (
//         <li key={state.id}>
//           <Statistics state={state} />
//         </li>
//       ))}
//     </div>
//   );
// };
// StatisticsList.propTypes = {
//   stats: PropTypes.array.isRequired,
// };
