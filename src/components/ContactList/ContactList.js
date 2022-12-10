// import PropTypes from 'prop-types';

// import { ControlsBox, Button } from './FeedbackOptions.styled';

export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <p item={item}></p>
          </li>
        );
      })}
    </ul>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
