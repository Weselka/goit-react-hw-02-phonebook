import PropTypes from 'prop-types';

import { Contact } from 'components';

export const ContactList = ({ items, onDelete }) => {
  console.log(items);
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Contact contact={item} onDelete={onDelete}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
