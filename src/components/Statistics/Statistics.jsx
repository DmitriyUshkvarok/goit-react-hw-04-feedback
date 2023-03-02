import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <ul className={css.statisticList}>
      <li className="statisticItem">
        <p className={css.statisticText}>Good: {good}</p>
      </li>
      <li className="statisticItem">
        <p className={css.statisticText}>Neutral: {neutral}</p>
      </li>
      <li className="statisticItem">
        <p className={css.statisticText}>Bad: {bad}</p>
      </li>
      <li className="statisticItem">
        <p className={css.statisticText}>Total: {total}</p>
      </li>
      <li className="statisticItem">
        <p className={css.statisticText}>
          PositiveFeedback: {positiveFeedback}
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};

export default Statistics;
