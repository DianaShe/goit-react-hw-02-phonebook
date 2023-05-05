import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (this.isInPhoneBook(newContact)) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  isInPhoneBook = newContact => {
    return this.state.contacts.find(({ name }) => name === newContact.name)
      ? true
      : false;
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  };

  clearFilter = () => {
    this.setState({
      filter: "",
    })
  }

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.handleFilter} onBlur={this.clearFilter}></Filter>
        <h2>Contacts</h2>
        <ContactList contacts={visibleContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}
