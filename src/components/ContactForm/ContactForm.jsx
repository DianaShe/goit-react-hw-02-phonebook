import { Component } from 'react';
import { FormContainer, AddButton } from './ContactForm.styled';
import { Input } from 'utils/Utils.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const {name, number} = this.state;
    e.preventDefault();

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const {name, number} = this.state;
    return (
      <div>
        <FormContainer onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <p>Number</p>
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <AddButton type="submit">Add contact</AddButton>
        </FormContainer>
      </div>
    );
  }
}


