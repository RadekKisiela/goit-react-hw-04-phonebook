import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

class ContactItem extends React.Component {
  render() {
    const { contact, onDeleteContact } = this.props;
    return (
      <li>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button className={css.btn} onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    );
  }
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
