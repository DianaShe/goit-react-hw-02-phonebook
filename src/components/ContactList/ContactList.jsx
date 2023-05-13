import React from 'react';
import { Contact, Info } from './ContactList.styled';
import { Button } from 'utils/Utils.styled';
import PropTypes from 'prop-types';

function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <Contact key={id}>
          <Info>{name}: {number}</Info>
          <Button type='button' onClick={() => onClick(id)}>Delete</Button>
        </Contact>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
