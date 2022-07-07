import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ filteredContacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact}>
            {name}: {number}
            <button
              type="click"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
