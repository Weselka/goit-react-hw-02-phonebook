import PropTypes from 'prop-types';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
  // options: PropTypes.array.isRequired,
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};