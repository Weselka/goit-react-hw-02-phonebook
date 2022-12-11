import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

export class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  // static propTypes = {};

  state = {
    contacts: this.props.initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);

  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ contacts: [], name: '' });
  // };

  // nameInputId = nanoid();

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Phonebook
        </Heading>
        <Section>
          <ContactForm
            onSubmit={this.addContact}
            // onSubmit={this.formSubmitHandler}
          />
        </Section>
        <Section title="Contacts">
          <Filter></Filter>
          {contacts.length > 0 && (
            <ContactList
              items={contacts}
              onDelete={this.deleteContact}
            ></ContactList>
          )}
        </Section>
      </Container>
    );
  }
}
